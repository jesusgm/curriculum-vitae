# Curriculum vitae

Proyecto para tener un CV online simple desplegado en github pages en la carpeta **_/docs_**

### Orígen de los datos

Inicialmente los datos se recuperaban de un endpoint desplegado en un servidor online PHP mediante axios. Después de comprobar la poca variabilidad de la información, se ha decidido tener esa información en ficheros _.json_ en el propio proyecto para evitar el mantenimiento del servidor y mejorar el rendimiento evitando el tiempo de la llamada al servidor.

### Scripts disponibles

- start: Levanta el proyecto en el puerto 3000
- build: Compila el proyecto en modo producción en la carpeta **/docs** que será lo que github pages mostrará
