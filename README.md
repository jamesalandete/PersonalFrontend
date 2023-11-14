# Personas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4202/`. The app will automatically reload if you change any of the source files.


## Instalacion
1. Dirigirse a la ruta del proyecto y abrir venta de comandos o power shell en la raiz del proyecto
2. Escribir en la ventana de comandos la sentencia "npm install" sin las comillas, esto instala dependecias necesarias para que el proyecto pueda ejecutarse sin problemas
3. Despues terminado el paso 2, escribir "npm start" esta sentencia iniciara el proyecto en el port asignado
4. El port asignado se puede encontrar en el archivo package.json en la sentencia
( "start": "ng serve --host 0.0.0.0 --port 4202" )
5. Dirigirse al navegador y colocar la siguiente ruta " localhost:port " en este caso el port que esta asignado en el packege.json
6. Iniciar sesion y listo tienes la aplicacion

# Especificaciones
1. La aplicacion esta utilizando redux, esto quiere decir que trabaja con acciones y estados
2. Hay una extension para monitorear esto la cual puedes descargar en Chrome llamada Redux

Para tener en cuenta una accion desencadena un efecto y este dispara otra accion de respuesta antes pasando por reducer donde cambia el estado anterior por el nuevo y este puede ser detestado suscribiendose al selector, el cual estara pendiente cuando este estado cambie realizar una opcion