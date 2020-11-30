

// Funcion para peticiones a Giphy
export const getGifs = async( category ) => {

    // Url de Giphy
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=IcR3aqTu1p3aTSeQOL1CezHJE3QL2IXu`;

    // Hacemos el Fetch
    const resp = await fetch( url );
    const { data } = await resp.json();

    // Recuperamos los datos qyue nos interesan de data
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // Con ?, indica si vienen img.images, entonces usa el resto
        }
    }); 

    return gifs;

}