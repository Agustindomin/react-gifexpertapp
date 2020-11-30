import React, { useState } from 'react';

// TAREA: Importamos el paquete props-types
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    // Hook useState
    const [inputValue, setInputValue] = useState(''); // inicializamos a string vacio, si no es undefined y falla el campo input del form

    // Manejador de eventos del input,. Con esto el valor inputValue está SIEMPRE actualizado y lo podemos usar en todos los sitios
    const handleInputChange = (e) => {
        // console.log(e.target.value)
        // Cambiamos el inputValue con el setInputValue del hook
        setInputValue( e.target.value );
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
         
        // TAREA: recibir la funcion setCatergories desde el el componente padre GifExpertApp y usarla para añadir la categoria escrita en el input
        // setCategories(e.target.value); // esto falla, poruqe al hacer el map de categories nulas falla

        // Validamos que venga algo en el campo inputValue
        if ( inputValue.trim().length > 2 ) {
            // Añadimos el valor a las categories
            setCategories( cats => [inputValue, ...cats ] ); // Hay que hacerlo así porque no tenemos el acceso a las categorias y falla
            // Inicializamods el campo inputValue
            setInputValue('');
        }

        // console.log('Submit hecho')


    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
};

// TAREA: Definimos el tipo de las propiedades:
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};