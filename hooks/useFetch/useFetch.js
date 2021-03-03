import { useEffect, useRef, useState } from "react"



export const useFetch = ( url ) => {
    

    const isMounted = useRef( true );
    
    //https://www.breakingbadapi.com/api/quotes/1`;
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    })

    useEffect( () => {
        return () => {
            isMounted.current = false;   
        }
    }, [])

    useEffect( ()=> {

        setState({ data: null, loading: true, error: null })

        fetch( url )
            .then( resp => resp.json())
            .then( data => {

                if ( isMounted.current ) {
                    
                    setState({
                        data,
                        loading: false,
                        error: null,
                    })
                    
                }
            })
            .catch( err => ({
                data: null,
                loading: false,
                error: 'No se encontro ningun dato en esta url',
            }))

    }, [ url ] )

    return state;

}
