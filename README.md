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
3. en powershell de windows ejecutar 
```
./features.bat
```
esto ejecutara los 20 escenarios de la carpeta Features_files


### Cypress
#### Requerimientos
- Node v22.0.0

#### Pasos

1. Desde la _raiz_, ir al directorio de Cypress:

   `cd Cypress`

2. Instalar dependencias (En el packaje.json se incluye `cypress`):

   `npm install`

3. Ejecutar las pruebas con cypress en modo headless

   `npx cypress open`

4. Seleccionar la opcion E2E Testing

5. Seleccionar Chrome y dar clic en `Start E2E Testing in Chrome`

5. Se abrira una ventana de Chrome, dar click en el nombre de la funcionalidad que desea probar.

6. Se arbira una ventana con los pasos ejecutados y al final pobra ver el estado de la prueba.




## Semana 6.
Escenarios escogidos para pruebas de regresión visual.
EP01,EP04,E11,E12,E14,EP16, EP17,EP18
## Herramienta escogida Cypress.

scripts funcionalidad funcionalidad_01_ghost_v3 , funcionalidad_03_ghost_v3 , funcionalidad_04_ghost_v3.cy





