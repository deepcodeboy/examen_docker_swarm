# Examen Docker Swarm
## Pasos para que el profesor levante los servicios:
### Instalar las dependencias de Node.js
- Abrir la consola en la raiz del proyecto, luego introducir los siguientes comandos:
```sh
cd server
```
```sh
npm i
```
```sh
cd ..
```

### Crear la imagen del servicio de Node:
- Para crear la imagen desde la raiz del proyecto debe ejecutar este comando en la consola: 
```sh
docker build -t animales ./server
```
- En caso que se encuentre en la posicion de la carpeta del servidor, el comando para crear la imagen es:
```sh
docker build -t animales .
```

### Levantar los servicios:
Para levantar los servicios debe estar posicionado en la carpeta raiz del proyecto.
- Para levantar los servicios debe ejecutar el siguiente comando:
```sh
docker stack deploy -c servicios.yml services
```

## Ingresar al servicio
- Para consumir el servicio debe ingresar en la siguiente ruta:
```
http://localhost:3005
```