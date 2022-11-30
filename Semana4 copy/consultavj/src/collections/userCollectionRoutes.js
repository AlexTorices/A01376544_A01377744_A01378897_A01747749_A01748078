'use strict'; 
 
module.exports = function(app) { 
  var userCollection = require('./userCollectionController'); 


 
  app.route('/user') 
    .get(userCollection.obtener_usuarios) 
    .post(userCollection.agregar_usuario); 
 
  app.route('/user/:correo') 
    .get(userCollection.obtener_usuario); 

  app.route('/login/:correo/:contra') 
    .get(userCollection.obtener_autenticacion); 

    app.route('/user/coleccion/:usuario')
    .post(userCollection.agregar_coleccion);

  app.route('/user/coleccion/:usuario/:clave')
    .get(userCollection.obtener_coleccion);

    app.route('/user/coleccion/consola/:usuario/:clave')
    .get(userCollection.obtener_coleccion_consola);

  app.route('/log/:usuario')
    .get(userCollection.obtener_logs_usuario);

  app.route('/log/:usuario/:clave')
    .get(userCollection.obtener_logs_usuario_palabra_clave);

};

