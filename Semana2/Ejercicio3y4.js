

// Ejercicio 3

const getAlbumldAsync = async (idAlbum) =>{
    return "Album Async";
}
getAlbumldAsync('album').then((mensaje)=>{
    console.log(mensaje);
})

const devuelveAlgoAsync = async() =>{
    try{
        const peticion = await fetch ('https://jsonplaceholder.typicode.com/albums/1/photos');
        const information = await peticion.json();
        console.log (information);

        // Ejercicio 4

        for (var i = 0; i < information.length; i++) {
            let {albumId:a1, id:i1, title:t1, url:u1, thumbnailUrl:u2} = information[i];
            console.log(a1, i1, t1, u1, u2);
         }
        
    }catch(error){
        console.warn(error);
    }

}

getAlbumldAsync()
devuelveAlgoAsync()
