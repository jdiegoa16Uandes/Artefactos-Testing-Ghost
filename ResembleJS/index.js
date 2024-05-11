const config = require("./config.json");
const fs = require('fs-extra');
const path = require('path');
const resemble = require('resemblejs');

const dir1 = path.join(...config.path, config.dir_g3)
const dir2 = path.join(...config.path, config.dir_g5)

async function compareImages() {
    await fs.ensureDir(config.output_path);
    const files1 = await fs.readdir(dir1);
    const files2 = await fs.readdir(dir2);

    const images = [];

    var misMatchPercentage_total = [];

    for (let file of files1) {
        if (file.endsWith(config.img_format) && files2.includes(file)) {
            const image1 = fs.readFileSync(path.join(dir1, file));
            const image2 = fs.readFileSync(path.join(dir2, file));

            const diff = await new Promise((resolve) => {
                resemble(image1).compareTo(image2).onComplete(resolve);
            });

            const diffImagePath = path.join(config.output_path, `diff-${file}`);
            await fs.writeFile(diffImagePath, diff.getBuffer());

            const file1 = path.join('..', dir1, file);
            const file2 = path.join('..', dir2, file);

            misMatchPercentage_total.push(diff.misMatchPercentage)

            images.push(`
            <tr>
                <td>${file}</td>
                <td><img src="${file1}" alt="Imagen ${config.dir_g3}"></td>
                <td><img src="${file2}" alt="Imagen ${config.dir_g5}"></td>
                <td><img src="${path.basename(diffImagePath)}" alt="Diferencias"></td>
                <td>${diff.misMatchPercentage}%</td>

            </tr>`);
        }
    }

    const sum = misMatchPercentage_total.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
    const average = sum / misMatchPercentage_total.length;

    const fullHtml = `<html>
        <head>
            <style>
            table { margin: 0 auto; }
            table { color: #333; background: white; border: 1px solid grey; font-size: 12pt; border-collapse: collapse; }
            table thead th, table tfoot th { color: #777; background: rgba(0,0,0,.1); }
            table caption { padding:.5em; }
            table th, table td { padding: .5em; border: 1px solid lightgrey; }
            img { width: 400px; }
            </style>
        </head>
        <body>
            <h1>Comparación de versiones de Ghost 3.42 vs 5.83</h1>
            <h2>Promedio total: ${average.toFixed(2)}%</h2>
            <table>
                <tr>
                    <th>Identificador</th>
                    <th>Imagen 1</th>
                    <th>Imagen 2</th>
                    <th>Diferencias</th>
                    <th>Porcentaje de diferencia</th>
                </tr>
                ${images.join('')}
            </table>
        </body></html>`;
    await fs.writeFile(path.join(config.output_path, 'reporte.html'), fullHtml);
}

compareImages().then(() => console.log('La comparación ha finalizado, abra desde su navegador el archivo reporte.html en el directorio ResembleJS/' + config.output_path));