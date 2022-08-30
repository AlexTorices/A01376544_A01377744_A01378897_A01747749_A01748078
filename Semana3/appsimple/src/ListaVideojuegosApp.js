import React from 'react';
const ListaVideojuegosApp = () => {

    //Declaramos el titulo como una variable.  
    const titulo = 'Mis Videojuegos';
    const arregloVideojuegos = ["Nombre - ", "Desarrollador - ", "Fecha de lanzamiento"]
    const arregloVideojuegos2 = ["Stray - ", "BlueTwelve Studio - ", "19 de Julio 2022"]
    const arregloVideojuegos3 = ["Pokemon Scarlet - ", "GameFreak - ", "18 de Noviembre 2022"]
    const arregloVideojuegos4 = ["Minecraft - ", "Mojang Studios - ", "18 de Noviembre del 2011"]




    //Devolvemos el JSX del componente. 
    return (
        // Para usar comentarios en JSX necesitamos colocarlos entre {/*...*/} 
        <>
            {/* 
    Utilizamos la variable titlo en el JSX 
   */}
            <h1>{arregloVideojuegos}</h1>
            <p>{arregloVideojuegos2}</p>
            <img src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png"></img>
            <p>{arregloVideojuegos3}</p>
            <img src="https://www.levelup.com/uploads/images/757206/757206.jpg"></img>
            <p>{arregloVideojuegos4}</p>
            <img src="https://www.mobygames.com/images/covers/l/489736-minecraft-windows-apps-front-cover.jpg"></img>
        </>
    );

}

export default ListaVideojuegosApp; 