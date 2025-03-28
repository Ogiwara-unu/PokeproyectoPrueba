Para este proyecto se usa express como servidor backend, cors para permitir peticiones externas, axios para consumir la pokeapi y dotenv para manejo de variables de entorno.
También estamos usando pm2 como administrador de procesos, esto quiere decir que va a correr en segundo plano y se encargará de mantener el servidor prendido
Recuerden revisar bien los puertos, si la pantalla sale en blanco al abrir el index.html es porque estamos apuntando a un puerto equivocado.
Comandos para correr el proyecto:
1- npm install
2- pm2 start server.js o si no quieren usar pm2 para pruebas pueden usar node server.js 
3- Correr el index con live server

Los modulos a desarrollar para el proyecto final serian:
1.Listado de Pokémon con búsqueda y filtrado.

2.Detalle de un Pokémon con estadísticas e imágenes.

3.Comparador de Pokémon para ver diferencias entre dos seleccionados.

Cabe recalcar que este no es el proyecto final, es solo una prueba, ya que para el frontend podemos usar react por ejemplo.
