

const getAlbumldAsync = async (idAlbum) =>{
    return "Album por ID";
}
getAlbumldAsync('album').then((mensaje)=>{
    console.log(mensaje);
})

const devuelveAlgoAsync = async() =>{
    try{
        const peticion = await fetch ('https://jsonplaceholder.typicode.com/albums/1/photos');
        const information = await peticion.json();
        console.log (information);
    }catch(error){
        console.warn(error);
    }

}

devuelveAlgoAsync();