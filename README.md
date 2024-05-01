# Artefactos Testing Ghost

## Descripción
[Ghost](https://ghost.org/) es una aplicación de blogs de codigo abierto. Se desea realizar Pruebas de Reconocimiento y E2E (End-to-end) para validar y verificar los escenarios de pruebas propuestos en este repositorio. Las herramientas utilizadas son [cypress](https://docs.cypress.io/) y [Kraken](https://thesoftwaredesignlab.github.io/KrakenMobile/).

### Integrantes
- Miguel Angel Moreno
- Jose Galeano
- Rafael Negrete
- Juan Diego Aponte

### Aplicación desplegada
- [Ghost](https://ghost-mnkl.onrender.com)

### Requisitos previos
1. Clonar el repositorio de Artefactos-Testing-Ghost. Desde el terminal de su sistema operativo, ubiquese en un directorio donde quiera almacenar el respoitorio y ejecute el siguiente comando:

   `git clone git@github.com:jdiegoa16Uandes/Artefactos-Testing-Ghost.git`

2. Una vez clonado el repositorio, ubicarse en el directorio:

   `cd Artefactos-Testing-Ghost` Esta ubicación sera referenciada como la _raiz_ en este README

### Kraken
#### Requerimientos

- Ruby v2.3
- Node v22.0.0

#### Pasos

1. Desde la _raiz_, ir al directorio de Kraken:

   `cd Kraken/`

2. Instalar dependencias (En el packaje.json se incluye `kraken-node`, `android-platform-tools`, `appium`):

```
npm install
```

3. Generar el nodo: 

     `npx kraken-node gen`

**TODO** Este paso me boto error en Windows, creo que no es necesario
```
C:\Users\josea\Personal\MISO\4103\Artefactos-Testing-Ghost\Kraken>npx kraken-node gen
C:\Users\josea\Personal\MISO\4103\Artefactos-Testing-Ghost\Kraken\node_modules\kraken-node\lib\utils\Scaffolder.js:10
            throw new Error('ERROR: Features directory already exists');
            ^

Error: ERROR: Features directory already exists
    at Scaffolder.copyFeaturesStructureToCurrentDirectory (C:\Users\josea\Personal\MISO\4103\Artefactos-Testing-Ghost\Kraken\node_modules\kraken-node\lib\utils\Scaffolder.js:10:19)
    at Object.<anonymous> (C:\Users\josea\Personal\MISO\4103\Artefactos-Testing-Ghost\Kraken\node_modules\kraken-node\bin\kraken-node:8:14)
    at Module._compile (node:internal/modules/cjs/loader:1455:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1534:10)
    at Module.load (node:internal/modules/cjs/loader:1265:32)
    at Module._load (node:internal/modules/cjs/loader:1081:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:187:14)
    at node:internal/main/run_main_module:28:49

Node.js v22.0.0
```

4. Inicializar el proyecto:

     `npx kraken-node run`

### Cypress
#### Requerimientos
- Node v22.0.0

#### Pasos

1. Desde la _raiz_, ir al directorio de Cypress:

   `cd Cypress`

2. Instalar dependencias (En el packaje.json se incluye `cypress`):

   `npm install`

3. Ejecutar las pruebas con cypress en modo headless

   `npx cypress run --headless`
