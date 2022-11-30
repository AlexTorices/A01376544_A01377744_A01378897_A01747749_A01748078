'use strict'; 
 
const MongoClient = require('mongodb').MongoClient; 
const url = "mongodb://127.0.0.1:27017"; 
const dbName = 'semana10'; 
 
exports.obtener_usuarios = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const usuario = database.collection("Usuario"); 
 
        // Consulta sin filtros 
        const query = {}; 
 
        const options = { 
            // Indicamos las columnas que queremos obtener en el resultado 
            projection: { nombre: 1, matricula: 1 }, 
        }; 
 
        // Hacemos la consulta 
        const cursor = usuario.find(query, options); 
 
        cursor.toArray().then((data) => { 
            console.log("Resultados Obtenidos: " + data.length); 
            res.end(JSON.stringify(data)); 
        });         
    }); 
}; 
 
exports.obtener_usuario = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const usuario = database.collection("Usuario"); 
 
        // Recuperamos el valor del parametro 
        var correoUsuario = req.params.correo; 
 
        // Declaramos los filtros 
        const query = { correo: correoUsuario }; 
 
        // Hacemos la consulta 
        const alumno = await usuario.findOne(query); 
 
        console.log("Consulta ejecutada..."); 
 
        res.end(JSON.stringify(alumno)); 
    }); 
}; 

exports.obtener_autenticacion = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const usuario = database.collection("Usuario"); 
 
        // Recuperamos el valor del parametro 
        var correoUsuario = req.params.correo; 
        var contraUsuario = req.params.contra;
 
        // Declaramos los filtros 
        const query = { correo: correoUsuario, password: contraUsuario }; 
 
        // Hacemos la consulta 
        const alumno = await usuario.findOne(query); 
 
        console.log("Consulta ejecutada..."); 
 
        res.end(JSON.stringify(alumno)); 
    }); 
}; 
 
exports.agregar_usuario = function (req, res) { MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const usuario = database.collection("Usuario"); 
 
        var nuevoUsuario = req.body; 
 
        const result = await usuario.insertOne(nuevoUsuario); 
 
        console.log(`Registro creado: ${result.insertedId}`); 
 
        res.end(); 
    }); 
};

exports.agregar_coleccion = function (req, res) { MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
    if (err) { 
        throw err; 
    } 

    const database = mdbclient.db(dbName); 

    // Referencia a la coleccion 
    const usuario = database.collection("Usuario"); 

    // Recuperamos el valor del parametro 
    var correoUsuario = req.params.correo; 
    var nuevaColeccion = req.body; 

    // Declaramos los filtros 
    const query = { correo: correoUsuario }; 

    // Hacemos la consulta 
    const alumno = await usuario.findOneAndUpdate(query, {coleccion : nuevaColeccion}); 

    console.log("Consulta ejecutada..."); 
    
    alumno = JSON.stringify(alumno.coleccion) + "," + JSON.stringify(nuevaColeccion)

    res.end(todaLaColeccion); 
}); 
};