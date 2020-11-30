import React from 'react'

export const GifGridItem = ( {title, url} ) => {

    // console.log(props);
    // console.log( {id, title, url} )

    return (
        // class="" no se pude usar porque esto es un archivo JS y class es un a palabra reservada de JS
        <div className="card animate__animated animate__fadeIn"> 
            {/* { img.title } */}
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
