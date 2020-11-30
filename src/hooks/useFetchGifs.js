// Custom Hook useFetchGifs

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs( category ) // esto retorna una promesa
                .then( imgs => {

                    //setTimeout( () => {

                        setState({
                            data: imgs,
                            loading: false
                        });
                        
                    //}, 3000);

                });
        
    }, [category]); // solo lo ejecutamos cuando la categoria cambia

    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     });
    // }, 3000);

    return state; // {data: [], loading: true}

}