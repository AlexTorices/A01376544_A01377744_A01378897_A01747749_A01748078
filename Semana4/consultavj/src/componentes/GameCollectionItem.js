import React from "react";

export const GameCollectionItem = ({ game, handleDeleteGame }) => {

    return (
        <>
            <div className="card text-center text-black bg-white mb-3" style={{ width: "20rem" }} background="#C2897D">
                <div className="card-body">
                    <img
                        src={game.juego.background_image}
                        alt="GAME"
                        style={{ width: "100%" }}
                        width="20rem"
                        height="200rem"
                    />
                    <br /><br />
                    <h5 className="card-title">{game.juego.name}</h5>
                    <p className="card-text">Rating: {game.juego.rating}</p>
                    <p className="card-text">Metacritic: {game.juego.metacritic}/100</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteGame(game.id)}
                    >
                        Borrar
                    </button>
                </div>
            </div>
        </>
    );
};