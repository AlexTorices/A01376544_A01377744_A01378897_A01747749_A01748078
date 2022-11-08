//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

module.exports = function (app) {

    const gameCollection = require('./gameCollectionController');

    app.route('/games')
        .get(gameCollection.obtener_juegos)
        .post(gameCollection.agregar_juego);
        
    app.route('/games/:gameIndex')
        .get(gameCollection.obtener_juego)
        .delete(gameCollection.borrar_juego);

    app.route('/games/:gameName')
        .post(gameCollection.obtener_juego_nombre);
        
};