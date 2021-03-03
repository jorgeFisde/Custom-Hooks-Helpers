import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState( initialState );


    const reset = () => {
        setValues( initialState );
    }

    // Recibe la accion Event y devuelve un objeto con el elemento del formulario y su contenido 
    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value,
        })
    

    }

    return [ values, handleInputChange, reset, ]


}
