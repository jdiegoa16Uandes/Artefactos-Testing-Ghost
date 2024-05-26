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
1. Visitar la página de releases del repositorio (Artefactos-Testing-Ghost)[https://github.com/jdiegoa16Uandes/Artefactos-Testing-Ghost/releases/].

2. Descargar el archivo Source code en formato .zip del release más reciente.

3. Descomprimir el archivo .zip y ubicarse dentro del directorio del repositorio descargado, por defecto debe ser:

   `Artefactos-Testing-Ghost` Esta ubicación sera referenciada como la _raiz_ en este README

## Ejecución de pruebas

### Kraken 

#### Requerimientos

- Node v22.0.0

#### Pasos

1. Desde la _raiz_, ir al directorio de Kraken:

   `cd Kraken`

2. Instalar dependencias (En el packaje.json se incluye `kraken-node`, `android-platform-tools`, `appium`):

   `npm install`

##### para windows

3. Se debe mover el primer archivo en el directorio `features/Features_file` a `features`

4. Ejecutar
   
   `npx kraken-node run`

5. Devolver el archivo movido de vuelta a `features/Features_file`

6. Repetir el proceso para cada archivo en `features/Features_file` con extension .feature

##### para usuarios UNIX

3. Mover todos los archivos con extension .feature en el directorio `features/Features_file` a `features`

4. Ejecutar
   
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

   `npx cypress open`

4. Seleccionar la opcion E2E Testing

5. Seleccionar Chrome y dar clic en `Start E2E Testing in Chrome`

5. Se abrira una ventana de Chrome, click en cada archivo de prueba (con extension .cy.js).

6. Se arbira una ventana con los pasos ejecutados y al final pobra ver el estado de la prueba.

### RiPuppet

#### Requerimientos

- Node v12.22.12

#### Pasos

1. Desde la _raiz_, ir al directorio de Cypress:

   `cd RIPuppet`

2. Instalar dependencias:

   `npm install`

3. Ejecutar RiPuppet:

   `node index.js`

4. Dirijirse al directorio `results/{fecha-de-ejecucion-de-pruebas}/chromium/report.html` en donde `{fecha-de-ejecucion-de-pruebas}` corresponde a la fecha de ejecución del paso 3 y ejecutar:

   `npx live-server`

5. En caso de abrir una ventana del navegador con un listado de archivos, dar click en un `report.html`

Se ha definido el nivel de profundidad para las pruebas en `1`. Se puede ampliar para incrementar el cubrimiento del sitio. Para incrementar debe cambiar en `config.json`, el parametro `depthLevels` al nivel que desee. Tenga en cuenta que al incrementar el nivel, la carga sobre el servidor sera mayor y se pueden presentar fallos de conexion o bloqueo de intentos en el usuario. Asi mismo, al incrementar, el tiempo de ejecución de la prueba incrementara.

## Reportes

Escenarios escogidos para pruebas de regresión visual. EP01, EP04, EP06, EP09, E11, E12, E14, EP16, EP17, EP18

* [Funcionalidades](https://github.com/jdiegoa16Uandes/Artefactos-Testing-Ghost/wiki/Funcionalidades)

* [Video Explicación](https://www.youtube.com/watch?v=MekUtPULDxU)

Para Cypress, estos archivos son los correspondientes a las pruebas de regresión visual.

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

   - funcionalidad_03b_ghost_v5_aleatorio.c
   
   - funcionalidad_03a_ghost_v5_pseudo.cy

   - funcionalidad_03b_ghost5_pseudo.cy
     
   - funcionalidad_04_ghost_v5_a-priori.cy

   - funcionalidad_04_ghost_v5_pseudo.cy

   - funcionalidad_04_ghost_v5_aleatorio.cy

   - funcionalidad_05_ghost_v5_a-priori.cy

   - funcionalidad_05_ghost_v5_pseudo.cy

   - funcionalidad_05_ghost_v5_aleatorio.cy

Para Kraken, estos archivos son los correspondientes a las pruebas de regresión visual

   - EP1-a-priori.feature

   - EP1-pseudo.feature

   - EP2-a-priori.feature

   - EP2-aleatorio.feature

   - EP2-pseudo.feature

   - EP3-a-priori.feature

   - EP3-aleatorio.feature

   - EP3-pseudo.feature

   - EP4-a-priori.feature

   - EP4-aleatorio.feature

   - EP4-pseudo.feature

   - EP5-a-priori.feature

   - EP5-aleatorio.feature

   - EP5-pseudo.feature

   - EP6-a-priori.feature

   - EP6-aleatorio.feature

   - EP6-pseudo.feature

   - EP7-a-priori.feature

   - EP7-aleatorio.feature

   - EP7-pseudo.feature

   - EP8-a-priori.feature

   - EP8-aleatorio.feature

   - EP8-pseudo.feature

   - EP9-a-priori.feature

   - EP9-aleatorio.feature

   - EP9-pseudo.feature

   - EP10-a-priori.feature

   - EP10-aleatorio.feature

   - EP10-pseudo.feature

   - EP11-a-priori.feature

   - EP11-aleatorio.feature

   - EP11-pseudo.feature

   - EP12-a-priori.feature

   - EP12-aleatorio.feature

   - EP12-pseudo.feature

   - EP13-aleatorio.feature

   - EP13-apriori.feature

   - EP13-pseudo.feature

   - EP14-a-priori.feature

   - EP14-aleatorio.feature

   - EP14-pseudo.feature

   - EP15-a-priori.feature

   - EP15-aleatorio.feature

   - EP15-pseudo.feature

   - EP16-aleatorio.feature

   - EP16-pseudo.feature

   - EP17-a-priori.feature

   - EP18-a-priori.feature

   - EP19-a-priori.feature

   - EP19-aleatorio.feature

   - EP19-pseudo.feature

   - EP20-a-priori.feature

   - EP20-aleatorio.feature

   - EP20-pseudo.feature

   - EP21-a-priori.feature

   - EP22-a-priori.feature

   - EP23-a-priori.feature

   - EP28-a-priori.feature

   - EP29-a-priori-y-aleatorio.feature

   - EP30-a-priori-y-aleatorio.feature

   - EP31-a-priori-y-aleatorio.feature

   - EP32-a-priori-y-aleatorio.feature

### ResembleJS

#### Requerimientos

- node v22
- (ResembleJS)[https://github.com/rsmbl/Resemble.js]
- (node-canvas)[https://www.npmjs.com/package/canvas]
- (node-gyp)[https://github.com/nodejs/node-gyp]
- Haber ejecutado las pruebas de Cypress descritas en este README

#### Pasos

1. Desde la raiz, ir al directorio `ResembleJS`

2. Desde la consola de comandos, ejecutar `npm install`

3. Desde la consola de comandos, ejecutar `node index.js`

4. Esperar a que la comparación finalice y dirijirse a la ruta mostrada en la consola.

5. el reporte se encuentra alojado en `reporte_de_comparacion/reporte.html`


### Backstop

#### Requerimientos

- node v18.20.2
- (Backstop)[https://github.com/garris/BackstopJS]
- Haber ejecutado las pruebas de Cypress descritas en este README

#### Pasos

1. Desde la raiz, ir al directorio `Backstop`

2. Desde la consola de comandos, ejecutar `npm install -g backstopjs`

3. Desde la consola de comandos, ejecutar `node index.js`

4. Desde la consola de comandos, ejecutar `backstop reference`

5. Desde la consola de comandos, ejecutar `backstop approve`

6. Desde la consola de comandos, ejecutar `backstop test`

7. Esperar a que la comparación finalice y abrir el archivo `backstop_data/html_report/index.html` en un navegador web.

# Semana 8 

- [Video explicacion](https://youtu.be/znzYMhVmzok)
- [Documentos estrategia](https://github.com/jdiegoa16Uandes/Artefactos-Testing-Ghost/tree/main/Estrategia-final)

