const config = require("./config.json");
const fs = require('fs-extra');
const path = require('path');

const dir1 = path.join(...config.path, config.dir_g3)
const dir2 = path.join(...config.path, config.dir_g5)

async function compareImages() {
    await fs.ensureDir(config.output_path);
    const files1 = await fs.readdir(dir1);
    const files2 = await fs.readdir(dir2);

    escenarios = [];

    for (let file of files1) {
        if (file.endsWith(config.img_format) && files2.includes(file)) {
            escenarios.push({
                "label": `${file}`,
                "url": `/${path.join(dir1, file)}`,
                "referenceUrl": `/${path.join(dir2, file)}`,
                "readyEvent": "",
                "readySelector": "",
                "delay": 20000,
                "hideSelectors": [],
                "removeSelectors": [],
                "hoverSelector": "",
                "clickSelector": "",
                "postInteractionWait": 0,
                "selectors": [],
                "selectorExpansion": true,
                "expect": 0,
                "misMatchThreshold" : 0.1,
                "requireSameDimensions": true
            });
        }
    }

    const backstopConfig = {
        "id": "backstop_default",
        "viewports": [
          {
            "label": "desktop",
            "width": 1920,
            "height": 1080
          }
        ],
        "onBeforeScript": "puppet/onBefore.js",
        "onReadyScript": "puppet/onReady.js",
        "scenarios": escenarios ,
        "paths": {
            "bitmaps_reference": "backstop_data/bitmaps_reference",
            "bitmaps_test": "backstop_data/bitmaps_test",
            "engine_scripts": "backstop_data/engine_scripts",
            "html_report": "backstop_data/html_report",
            "ci_report": "backstop_data/ci_report"
        },
        "report": ["browser"],
        "engine": "puppeteer",
        "engineOptions": {
          "args": ["--no-sandbox"]
        },
        "asyncCaptureLimit": 5,
        "asyncCompareLimit": 50,
        "debug": false,
        "debugWindow": false
      }

    return fs.writeFile('backstop.json', JSON.stringify(backstopConfig, null, 2), err => {
        if (err) throw err;
        console.log('BackstopJS configuration has been updated with new scenarios!');
      });
      
}

compareImages().then(() => console.log('La comparación ha finalizado, ahora corra '));