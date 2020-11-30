import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// Componente GifexpertApp
export const GifExpertApp = () => {

    // Definimos categorias
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; // Esto es constante y no se puede cambiar y además no se rendereiza si le añadimos categorias
    // Usamos el hook useState
    const [categories, setCategories] = useState(['One Punch']);// useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // TAREA: Manejador del boton
    // const handleAdd = () => {
    //     // setCategories('HunterXHunter'); // Esto falla poruwe machacamos el estado inicial del useState y lo convertimos de arrayb [] a string 'HunterXHunter'

    //     // setCategories([...categories, 'HunterXHunter']); // Usamos el operador spread ... para recuperar el array de categorias y le añadimos al final 'HunterXHunter'
    //     // setCategories(['HunterXHunter', ...categories]); // Usamos el operador spread ... para recuperar el array de categorias y le añadimos al principio 'HunterXHunter'
    //     // Usando callback
    //     setCategories( cats => [...cats, 'HunterXHunter']);

    //     console.log(categories);
    // };

    // console.log(categories);

    // Pasamos al componente AddCategory la referencia a la función setCatregories para que sea accesible

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/> 

            <hr />

            {/* <button onClick={ handleAdd }>Añadir Categoría</button> */}

            <ol>
                {
                    categories.map( category => (
                        // <li key={ category }>{ category }</li>
                        <GifGrid
                            key={ category }
                            category={ category} 
                        />    
                    ))
                }
            </ol>
        </>
    )
}
