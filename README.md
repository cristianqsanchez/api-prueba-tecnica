# Prueba Tecnica | API

- Api rest con express la cual permita realizar CRUD de usuarios y login con autenticación jwt.
- El proyecto se debe ejecutar sobre un contenedor de docker.
- Se debe crear un repositorio público en Github en donde se va a cargar el código de la prueba.
- El repositorio debe contener el backup de la base de datos y colección postman utilizada en el desarrollo.
- Los registros deben quedar almacenados en base de datos mysql.
- Se debe generar un archivo readme con los detalles de la ejecución del api.
- La documentación en swagger (opcional).

## 🚀 Instalación

clonar el repositorio
```
git clone https://github.com/cristianqsanchez/api-prueba-tecnica && cd api-prueba-tecnica
```

copiar el archivo `.env.example` en `.env` para gestionar las variables de entorno
```
cp .env.example .env
```

ejecutar contenedor de docker
```
docker-compose up
```

una vez ejecutado el contenedor la api correrá en el puerto `localhost:3000`

## 🛸 API

| method   	| endpoint    	| body                          	| output                        	|
|----------	|-------------	|--------------------------------	|-------------------------------	|
| `get`    	| /users/     	|                                	| retorna todos los usuarios    	|
| `get`    	| /users/{id} 	|                                	| retorna un usuario por id     	|
| `post`   	| /users/     	| ``` { username, password } ``` 	| crea un nuevo usuario         	|
| `patch`  	| /users/{id} 	| ``` { username, password } ``` 	| modifica un usuario existente 	|
| `delete` 	| /users/{id} 	|                                	| elimina un usuario existente  	|
| `post`   	| /login/     	| ``` { username, password } ``` 	| autentica un usuario con JWT  	|

## 📙 Recursos

- [Documentación en Swagger](https://app.swaggerhub.com/apis-docs/CRISTIANQUINTERO316/prueba-tecnica/1.0.0#/)
- [Backup de la base de datos](https://github.com/cristianqsanchez/api-prueba-tecnica/blob/main/src/db/backup.sql)
- [Colección de requests en Postman](https://github.com/cristianqsanchez/api-prueba-tecnica/blob/main/prueba-tecnica.postman_collection.json)

