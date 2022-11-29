import React from 'react';
import { useFetch } from '../componentes/useFetch';
import { useContador } from '../componentes/useContador';

export const MultipleCustomHooks = () => {

    const {state, increment} = useContador(1);


    //Utilizamos el custom hook 'useFetch'. Desestructuramos la información que devuelve el custom hook.
    const { loading, info } = useFetch(`https://api.rawg.io/api/games/${state}?key=88de3d5868fa451faafb8012c63acda6`); 
    console.log({loading, info});

    //DESESTRUCTURAR
    const {id, background_image, name, metacritic, rating} = !!info && info;


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
                    //Si loading es FALSE se muestra la información del juego
                    <div className="text-center">
                        <div key={id} className="card w-25">
                        <img src={background_image} className="card-img-top" alt="imagen"/>
                            <div className='card-body'>
                                <h5 className="card-title"> {name}</h5>
                                <p className='card-text'>Rating: {rating}</p>
                                <p className='card-text'>Metacritic: {metacritic}/100</p>
                            </div>
                        <br></br>
                        <button className="btn btn-primary btn-lg btn-block"
                            onClick={()=> increment()}>
                                Siguiente Videojuego
                        </button>
                        </div>
                    </div>
                )
        }
            
        </>
    );
}
                        


