// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

// export const GifGrid = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    // const [images, setImages] = useState([])

    // Importamos nuestro custom hook useFetchGifs
    const { data: images, loading } = useFetchGifs( category ); // ernviamos como argumento la categoria

    // Veamos el problema con el useSate
    // const [count, setCount] = useState(0); // Al poner un contador+1, cada vez que cambia, react renderizea todo el componente ===>
    // vuelve a ejecutarse TODO el codigo del componente, incluido getGifs() y aparte de que estamos haciendo peticiones cada vez,
    // si en vez de console.log(), ponemos un metodo setImages() ===> vuelve a renderizar y entra en un BUCLE SIN FIN!!!
    // Para soslayar esto, está el hook: useEffect

    // // Hook useEffect
    // useEffect( () => {
    //     // getGifs();
    //     getGifs( category )
    //     // .then( imgs => setImages(imgs) ); // podemos simplificarlo aun más porque recibe un argumento que se vuelve a enviar de nuevo sin cambios
    //     .then( setImages )
    // }, [ category ]); // el segundo parametro es un array [] de dependencias, si no mandamos nada, sólo se ejecuta una sóla vez

    // // Funcion para peticiones a Giphy
    // const getGifs = async() => {

    //     // Url de Giphy
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=IcR3aqTu1p3aTSeQOL1CezHJE3QL2IXu`;

    //     // Hacemos el Fetch
    //     const resp = await fetch( url );
    //     const { data } = await resp.json();

    //     // Recuperamos los datos qyue nos interesan de data
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url // Con ?, indoica si vienen img.images, entonces usa el resto
    //         }
    //     }); 

    //     console.log(gifs);
    //     setImages( gifs );

    // }

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            {/* loading ? 'cargando...' : 'Datos de gifs cargados' */}
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            // img={ img }
                            {...img} // Usamos el operador spread
                        />    
                    ))
                }
                {/* <ol>
                    TAREA: Poner los titulos de las imagenes en una lista ordenada
                    {
                        // images.map( image => (
                        images.map( ( {id, title } ) => ( // desctructuramos image
                            // <li key={ category }>{ category }</li>
                            <li key={ id }>{ title }</li>    
                        ))
                    }
                </ol>
                <h3>{count}</h3>
                <button onClick={ () => setCount( count + 1 )}>+1</button>*/}
            </div> 
        </>
    )
}
