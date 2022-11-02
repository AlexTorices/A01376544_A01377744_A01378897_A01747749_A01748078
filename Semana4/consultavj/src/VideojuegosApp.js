import React, { useState } from 'react';
import { AgregaGenero } from './componentes/AgregaGenero';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';

export const VideojuegosApp = () => {
    //Utilizamos el hook useState para inicializar la lista de generos de videojuegos.
    const [generos, setGeneros] = useState(['action']);
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Gamebook</h1>
                    <p className="lead">¡Bienvenido a la página donde podrás consultar información de
                        videojuegos!</p>
                </div>
            </div>

            <AgregaGenero setGeneros={setGeneros} />

            {/*
            Creamos la lista de géneros
            */}
            <ol className="list-group list-group-numbered">
                {
                    generos.map(genero => {
                        return <ResultadoVideojuegos key={genero} genero={genero} />
                    })
                }
            </ol>
        </>
    )
}