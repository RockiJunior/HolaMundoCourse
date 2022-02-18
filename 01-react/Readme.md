Para instalar react usamos el comando:

- npx create-react-app "nombre de la app"

Para agregar configuracion para ejecutar la aplicacion en sistemas operativos linux, o mac, 
debemos crear un archivo .env donde colocaremos una variable de entorno de configuracion.
Asi nos aseguramos de que funcione correctamente. La variable es:

- SKIP_PREFLIGHT_CHECK=true

Para ejecutar la aplicacion, ejecutamos el comando : 
- npm start

Para minificar y buildear la aplicacion(sirve mucho para hacer pruebas para deploy), vamos a usar el comando:
- npm run build

- Si queremos ver los distintos ejemplos de las clases de hola mundo debemos cambiar los nombres de los archivos que estan numerados y se nombran como -intro-app-js, por App.js
- A cualquiera de estos, debemos importarlos correctamente en el archivo index.js

La aplicacion no va a funcionar si no tenemos bien importado el archivo App.js en el index.js, y si no 
lo llamamos App.js al componente 