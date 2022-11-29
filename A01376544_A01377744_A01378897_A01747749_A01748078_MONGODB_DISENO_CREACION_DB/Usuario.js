db.Usuario.insertOne({"nombre":"mariana", "avatar":"string", "username":"mariana", "password":"pwd2", "fecha_registro":"15-11-2022", "correo":"juan@gmail.com", "coleccion":[{"username":"mariana", "_id":"28", "nombre_juego":"Left 4 Dead 2", "plataforma":"xbox", "comentarios":"Excelente juego"}, {"username":"mariana", "_id":"29", "nombre_juego":"Left 4 Dead 1", "plataforma":"xbox", "comentarios":"Buen juego"}, {"username":"mariana", "_id":"30", "nombre_juego":"F1 2020", "plataforma":"xbox", "comentarios":"Mejor de la saga"}, {"username":"mariana", "_id":"31", "nombre_juego":"FIFA 18", "plataforma":"xbox", "comentarios":"Mejoro un poco"}, {"username":"mariana", "_id":"33", "nombre_juego":"Forza Horizon 1", "plataforma":"xbox", "comentarios":"original"}]})


db.Usuario.insertOne({"nombre":"Fernando Leyva", "avatar":"string", "username":"ferleymar", "password":"pwd2", "fecha_registro":"15-11-2022", "correo":"fermail@gmail.com", "coleccion":[{"username":"ferleymar", "_id":"28", "nombre_juego":"Left 4 Dead 2", "plataforma":"xbox", "comentarios":"Excelente juego"}, {"username":"ferleymar", "_id":"29", "nombre_juego":"Left 4 Dead 1", "plataforma":"xbox", "comentarios":"Buen juego"}, {"username":"ferleymar", "_id":"30", "nombre_juego":"F1 2020", "plataforma":"xbox", "comentarios":"Mejor de la saga"}, {"username":"ferleymar", "_id":"31", "nombre_juego":"FIFA 19", "plataforma":"xbox", "comentarios":"Lo de siempre"}, {"username":"ferleymar", "_id":"32", "nombre_juego":"Forza Horizon 3", "plataforma":"xbox", "comentarios":"El peor de todos"}]})


db.Usuario.insertOne({"nombre":"Fernando Martinez", "avatar":"string", "username":"fermtz", "password":"pwd2", "fecha_registro":"15-11-2022", "correo":"fermtzmail@gmail.com", "coleccion":[{"username":"fermtz", "_id":"28", "nombre_juego":"Left 4 Dead 2", "plataforma":"xbox", "comentarios":"Excelente juego"}, {"username":"fermtz", "_id":"29", "nombre_juego":"Left 4 Dead 1", "plataforma":"xbox", "comentarios":"Buen juego"}, {"username":"fermtz", "_id":"30", "nombre_juego":"F1 2020", "plataforma":"xbox", "comentarios":"Mejor de la saga"}, {"username":"fermtz", "_id":"31", "nombre_juego":"FIFA 18", "plataforma":"xbox", "comentarios":"Mejoro un poco"}, {"username":"fermtz", "_id":"33", "nombre_juego":"Forza Horizon 5", "plataforma":"xbox", "comentarios":"El mejor de todos"}]})


db.Usuario.insertOne({“nombre”: “Juan”,  "avatar":"string", “username”: “juan”, “password”: “pwd”, “fecha_registro”: “15-11-2022”, “correo”: “juan@gmail.com",
“coleccion” :[{"username":"juan", "_id":"28", "nombre_juego":"Left 4 Dead 2", "plataforma":"xbox", "comentarios":"Buen juego”}], 
“coleccion” [{"username":"juan", "_id":"29", "nombre_juego":"Left 4 Dead 1", "plataforma":"xbox", "comentarios":"Buen juego”}] , 
“coleccion” [{"username":"juan", "_id":"30", “nombre_juego”:"Fifa 19", "plataforma":"xbox", "comentarios":"Buen juego”}] , 
“coleccion” [{"username":"juan", "_id":"31", “nombre_juego":"Fifa 20", "plataforma":"xbox", "comentarios":"Buen juego”}] , 
“coleccion” [{"username":"juan", "_id":"32", "nombre_juego":"F1", "plataforma":"xbox", "comentarios":"Buen juego”}] })

db.Usuario.update({"username":"ferleymar"},{"$set":{"logs":[2,6,14,15,16,17,18]}})
db.Usuario.update({"username":"mariana"},{"$set":{"logs":[1,5,9,10,11,12,13]}})
db.Usuario.update({"username":"fermtz"},{"$set":{"logs":[3,7,19,20,21,22,23]}})
db.Usuario.update({"username":"juan"},{"$set":{"logs":[4,8,24,25,26,27,28]}})





