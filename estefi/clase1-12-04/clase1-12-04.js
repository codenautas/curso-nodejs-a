INSTALACIÓN 
instalo mongodb-win32-x86_64-3.2.4-signed

1) Agrego la variable de entorno del sistemas:
c:\Program Files\MongoDB\Server\3.2\bin\

2) Necesito una carpeta para los archivos logs y otra para guardar la base de datos
>> mongod --port 27030 --dbpath="C:/TEMP/copias" --logpath="C:/TEMP/logs" 
En windows en principio no tengo un comando para dejar el proceso corriendo en background

3) Abro otra consola y me conecto con el cliente
>>mongo --port 27030

4) Algunos comandos
>>show dbs                                        -> Muestra las bases
>>use sistemas                                    -> Cree la base personas
>>db                                              -> Nombre de la base de datos en la que estoy
>>db.personas.insert({name:"emilio",piso:3})      -> Inserva el objeto {name:"emilio",piso:3} en la colección personas
>>show collections                                -> Muestra colecciones dentro de una base de datos
>>db.help
>>db.personas.find()                              -> Es como el select de postgres
>>db.personas.findOne().pretty                    -> Devuelve un registro cualquiera en un formato bonito (comprensible)

5) Importar datos para una base de datos
>>mongoimport --port 27030 --db sistemas -c personas --file gente.json --jsonArray

//Además de mongoimport también existe mongoexport
//El archivo json con los registro los generamos con jsonGenerator

