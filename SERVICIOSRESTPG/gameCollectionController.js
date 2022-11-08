'use strict';
var fs = require("fs");
module.exports.obtener_juegos = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        console.log(err);
        console.log(data);
        res.end(data);
    });
};

module.exports.agregar_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const array = JSON.parse(data);
        console.log(err);
        console.log(data);
        const nuevo = req.body;
        array.push(nuevo);
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), 'utf8', function (err, data) {
            console.log(err);
            res.end(err);
        });
        res.end(JSON.stringify(array));
    });
};


module.exports.obtener_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const juegos = JSON.parse(data);
        const juego = juegos[req.params.gameIndex]
        console.log(juego);
        res.end(JSON.stringify(juego));
    });
};

module.exports.obtener_juego_nombre = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const juegos = JSON.parse(data);
        const nombre = req.params.gameName;
        let juegos_encontrados  = [];
        for (var i = juegos.length-1; i > 0; i--){
            const nombre_juego = juegos[i].nombre
            if (nombre_juego.includes(nombre))
                juegos_encontrados.push(nombre_juego)
        }
        res.end(JSON.stringify(juegos_encontrados.toString()));
    });
};


module.exports.borrar_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const juegos = JSON.parse(data);
        const index = req.params.gameIndex;
        const juego = juegos[index]
        console.log(index)
        juegos.splice(index, 1);
        console.log(juego);
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(juegos), 'utf8', function (err, data) {
            console.log(err);
            res.end(err);
        });
        res.end(JSON.stringify(juego));

    });

};