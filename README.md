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
##### para windows
3. en powershell de windows ejecutar 
```
./features.bat
```
esto ejecutara los 20 escenarios de la carpeta Features_files
##### para usuarios UNIX
3. mover los archivos .feature de la carpeta Features_file a features
4. ejecutar
```
npx kraken-node run
```

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
EP01, EP04, EP06, EP09, E11, E12, E14, EP16, EP17, EP18
* [Funcionalidades](https://github.com/jdiegoa16Uandes/Artefactos-Testing-Ghost/wiki/Funcionalidades)
* [Video Explicación](https://www.youtube.com/watch?v=MekUtPULDxU)

## Herramienta escogida Cypress.

scripts funcionalidad funcionalidad_01_ghost_v3, funcionalidad_02_ghost_v3, funcionalidad_03_ghost_v3, funcionalidad_04_ghost_v3.cy

## Reportes

### ResembleJS

#### Requerimientos

 - node v22
 - (ResembleJS)[https://github.com/rsmbl/Resemble.js]
 - (node-canvas)[https://www.npmjs.com/package/canvas]
 - (node-gyp)[https://github.com/nodejs/node-gyp]
 - Haber ejecutado las pruebas de Cypress descritas en este README

#### Pasos

1. Desde la raiz, ir al directorio `ResembleJS`

2. Desde la consola de comandos, ejecutar `node index.js`

3. Esperar a que la comparación finalice y dirijirse a la ruta mostrada en la consola.

4. el reporte se encuentra alojado en `/ResembleJS/reporte_de_comparacion/reporte.html`


### Backstop

#### Requerimientos

 - node v22
 - (Backstop) [https://github.com/garris/BackstopJS]
 - Haber ejecutado las pruebas de Cypress descritas en este README

#### Pasos

1. Desde la raiz, ir al directorio `Backstop`

2. Desde la consola de comandos, ejecutar `node index.js`

3. Desde la consola de comandos, ejecutar `backstop reference`

4. Desde la consola de comandos, ejecutar `backstop approve`

5. Desde la consola de comandos, ejecutar `backstop test`

6. Esperar a que la comparación finalice y abrir el archivo `Backstop\backstop_data\html_report\index.html` en un navegador web.


## Semana 7

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

5. Se abrira una ventana de Chrome, click en cada prueba de la semana de manera consecutiva:

   - funcionalidad_01_ghost_v5_a-priori.cy
   - funcionalidad_01_ghost_v5_aleatorio.cy
   - funcionalidad_01_ghost_v5_pseudo.cy
  
   - funcionalidad_02_ghost_v5_a-priori.cy
   - funcionalidad_02_ghost_v5_aleatorio.cy
   - funcionalidad_02_ghost_v5_EP09_aleatorio.cy
   - funcionalidad_02_ghost_v5_EP09_pseudo.cy
   - funcionalidad_02_ghost_v5_pseudo.cy
  
   - funcionalidad_03a_ghost_v5_a-priori.cy
   - funcionalidad_03b_ghost_v5_a-priorib.cy
   - funcionalidad_03a_ghost_v5_aleatorio.cy
   - funcionalidad_03b_ghost_v5_aleatorio.cy
   - funcionalidad_03a_ghost_v5_pseudo.cy
   - funcionalidad_03b_ghost5_pseudo.cy
     
   - funcionalidad_04_ghost_v5_a-priori.cy

   - funcionalidad_04_ghost_v5_pseudo.cy

   - funcionalidad_04_ghost_v5_aleatorio.cy

   - funcionalidad_05_ghost_v5_a-priori.cy

   - funcionalidad_05_ghost_v5_pseudo.cy

   - funcionalidad_05_ghost_v5_aleatorio.cy

7. Se arbira una ventana con los pasos ejecutados y al final pobra ver el estado de la prueba.

