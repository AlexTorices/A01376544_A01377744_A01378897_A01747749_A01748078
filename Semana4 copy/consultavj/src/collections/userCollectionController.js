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
        const Log = database.collection("Logs"); 
 
        // Recuperamos el valor del parametro 
        var correoUsuario = req.params.correo; 
        var contraUsuario = req.params.contra;
 
        // Declaramos los filtros 
        const query = { correo: correoUsuario, password: contraUsuario }; 
 
        // Hacemos la consulta 
        const alumno = await usuario.findOne(query); 
        const log = await Log.insertOne({id : "fds", username : alumno.username, fecha : new Date(), evento : "intento log in"}); 
 
        console.log("Consulta ejecutada..."); 
 
        res.end(JSON.stringify(log)); 
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
    const usuario = database.collection("Coleccion"); 

    var nuevoUsuario = req.body; 

    const result = await usuario.insertOne(nuevoUsuario); 

    console.log(`Registro creado: ${result.insertedId}`); 

    res.end(); 
}); 
};


exports.obtener_coleccion = function (req, res) { MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
    if (err) { 
        throw err; 
    } 

    const database = mdbclient.db(dbName); 

    // Referencia a la coleccion 
    const alumnos = database.collection("Coleccion"); 

    // Recuperamos el valor del parametro 
    var Usuario = req.params.usuario; 
    var palabraClave = req.params.clave;


    const query = { nombre_juego: new RegExp(palabraClave, 'i') , username : Usuario}; 
 
    // Hacemos la consulta 
    const cursor = alumnos.find(query); 

    cursor.toArray().then((data) => { 
        console.log("Resultados Obtenidos: " + data.length); 
        res.end(JSON.stringify(data)); 
    });

}); 
};

exports.obtener_coleccion_consola = function (req, res) { MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
    if (err) { 
        throw err; 
    } 

    const database = mdbclient.db(dbName); 

    // Referencia a la coleccion 
    const alumnos = database.collection("Coleccion"); 

    // Recuperamos el valor del parametro 
    var Usuario = req.params.usuario; 
    var palabraClave = req.params.clave;


    const query = { plataforma: new RegExp(palabraClave, 'i') , username : Usuario}; 
 
    // Hacemos la consulta 
    const cursor = alumnos.find(query); 

    cursor.toArray().then((data) => { 
        console.log("Resultados Obtenidos: " + data.length); 
        res.end(JSON.stringify(data)); 
    });

}); 
};

exports.obtener_logs_usuario = function (req, res) { MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
    if (err) { 
        throw err; 
    } 

    const database = mdbclient.db(dbName); 

    // Referencia a la coleccion 
    const usuario = database.collection("Logs"); 

    // Recuperamos el valor del parametro 
    var Usuario = req.params.usuario; 

    // Declaramos los filtros 
    const query = { username: Usuario }; 

    // Hacemos la consulta 
    const alumno = await usuario.findOne(query); 

    console.log("Consulta ejecutada..."); 

    res.end(JSON.stringify(alumno)); 
}); 

};

exports.obtener_logs_usuario = function (req, res) { MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
    if (err) { 
        throw err; 
    } 

    const database = mdbclient.db(dbName); 

    // Referencia a la coleccion 
    const usuario = database.collection("Logs"); 

    // Recuperamos el valor del parametro 
    var Usuario = req.params.usuario; 

    // Declaramos los filtros 
    const query = { username: Usuario }; 

    // Hacemos la consulta 
    const alumno = await usuario.findOne(query); 

    console.log("Consulta ejecutada..."); 

    res.end(JSON.stringify(alumno)); 
}); 

};

exports.obtener_logs_usuario_palabra_clave = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const alumnos = database.collection("Logs"); 
 
        // Obtenemos el valor del parametro 
        var Usuario = req.params.usuario
        var palabraClave = req.params.clave; 
 
        // Declaramos los filtros 
        const query = { evento: new RegExp(palabraClave, 'i') , username : Usuario}; 
 
        // Hacemos la consulta 
        const cursor = alumnos.find(query); 
 
        cursor.toArray().then((data) => { 
            console.log("Resultados Obtenidos: " + data.length); 
            res.end(JSON.stringify(data)); 
        });
    }); 
};
