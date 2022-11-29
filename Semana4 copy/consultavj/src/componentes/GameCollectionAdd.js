import React from 'react';
import { useForm } from '../custom/useForm';
import { useFetch } from './useFetch';

export const GameCollectionAdd = ({ handleNewGame }) => {

    const [{ gameId }, handleInputChange, reset] = useForm({
        gameId: ''
    });

    //Utilizamos el custom hook 'useFetch'. Desestructuramos la informaci贸n que devuelve el custom hook.
    const { loading, info } = useFetch(`https://api.rawg.io/api/games/${gameId}?key=3b2a7026165844e9b41644d9d80f32f2`);
    console.log(loading, info);

    const handleAddGame = (e) => {
        //Evitamos el refresh del navegador con la función preventDefault() 
        e.preventDefault(); //Validamos que la descripción tenga información para poderlo agregar a la lista. 
        if (gameId.trim().length === 0) {
            return;
        }

        //Creamos el nuevo TODO 
        const nuevoJuego = {
            id: new Date().getTime(),
            juego: info, //Esta descripcion la obtenemos de la variable 'descripcion' que obtuvimos utilizando el custom 
        }

        //Creamos el nuevo todo. 
        handleNewGame(nuevoJuego);

        //Reseteamos los valores del formulario. 
        reset();
    }

    return (
        <>
            <h4>Agregar Videojuego</h4>
            < hr />
            <form onSubmit={handleAddGame}>
                {
                    //En este input text estamos igualando value a la variable 'descripcion' que  
                    // obtuvimos al utilizar el custom hook useForm 
                }
                <input
                    type="text"
                    name="gameId"
                    className="form-control"
                    placeholder="Indica el ID..."
                    autoComplete="off"
                    value={gameId}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
} 