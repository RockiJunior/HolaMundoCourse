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

