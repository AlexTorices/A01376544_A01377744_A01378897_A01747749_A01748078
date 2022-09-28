import React, { useEffect, useState } from 'react';
import { useFetch } from '../componentes/useFetch';
import { InfoVideojuegos } from './infoVideojuegos';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({ genero }) => {

    const [infoJuegos, setInfoJuegos] = useState([]);

    //Utilizamos useEffect para invocar la función getVideojuegos.
    useEffect(() => {
        getVideojuegos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Utilizamos el custom hook 'useFetch'. Desestructuramos la información que devuelve el custom hook.
    const { loading, info } = useFetch('https://api.rawg.io/api/games?key=88de3d5868fa451faafb8012c63acda6&genres=' + genero); 
    console.log({loading, info});

    //Invocamos el api de RAWG para obtener los videojuegos del género proporcionado en los parámetrs del
    // componente.
    const getVideojuegos = async () => {
        //URL del api de RAWG que validamos en postman
        const url = 'https://api.rawg.io/api/games?key=88de3d5868fa451faafb8012c63acda6&genres=' + genero;
        //Utilizamos Fetch API para invocar la url.
        const respuesta = await fetch(url);
        //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos.
        const {results} = await respuesta.json();
        //Obtenemos solamente la información que vamos a necesitar del json de la respuesta.
        const juegos = results.map(juego => {
            return {
                id: juego.id,
                nombre: juego.name,
                imagen: juego.background_image,
                rating: juego.rating,
                metacritic: juego.metacritic
            }
        })
        console.log(juegos);

        //Invocamos el metodo setInfoJuegos que obtivimos con la desestructuración del hook useState
        setInfoJuegos(juegos);
    }

    return (
        <>
        <h1>Información de Videojuegos</h1> <hr />
        {
            loading
                ? 
                (
                    //Si loading es TRUE, mostramos el mensaje 'loading'
                    <div className='alert alert-info text-center card w-25'>
                        Loading...
                    </div>
                )
                :
                (
                    <>
                        <h3 className="card-title">{genero}</h3>
                        {/*
                        Creamos la lista de juegos con la información que recuperamos de la invocación del api de RAWG,
                        utilizando la variable infoJuegos que obtuvimos en la desestructuración del hook useState.
                        */}
                        <InfoVideojuegos infoJuegos={infoJuegos}/>
                    </>
                )
        }
            
        </>
    );

}