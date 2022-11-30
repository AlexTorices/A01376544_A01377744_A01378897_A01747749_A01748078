'use strict'; 
 
module.exports = function(app) { 
  var userCollection = require('./userCollectionController'); 


 
  app.route('/user') 
    .get(userCollection.obtener_usuarios) 
    .post(userCollection.agregar_usuario); 
 
  app.route('/user/:correo') 
    .get(userCollection.obtener_usuario); 

  app.route('/user/:correo/:contra') 
    .get(userCollection.obtener_autenticacion); 

  app.route('/user/coleccion/:correo')
    .post(userCollection.agregar_coleccion);


};

