import React from "react"

export const InfoVideojuegos = ({infoJuegos}) => { 
    return(
        <>
            <div className="d-flex flex-wrap ">
            {
                infoJuegos.map(({ id, imagen, nombre, rating, metacritic }) => (
                    <div key={id} className="card w-25">
                        <img src={imagen} class="card-img-top" alt="imagen"/>
                        <div className='card-body'>
                            <h5 className="card-title"> {nombre}</h5>
                            <p className='card-text'>Rating: {rating}</p>
                            <p className='card-text'>Metacritic: {metacritic}/100</p>
                    </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}