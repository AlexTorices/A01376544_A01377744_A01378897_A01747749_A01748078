import { useState } from 'react'; 
 
export const useForm = (initialState = {}) => { 

    const [formValues , setFormValues] = useState(initialState);

    const reset = () =>{
        setFormValues(initialState)
    }
    //Esta función se va invocar cada vez que exista un cambio en alguno de los input text del formulario. 
    const handleInputChange = (e) => { 
        //console.log(e.target.name); 
        //console.log(e.target.value); 
        //Actualizamos el estado del formulario. 
        setFormValues({ 
            ...formValues,           
            [e.target.name]: e.target.value 
        }) 
    }

    return [
        formValues, 
        handleInputChange,
        reset
    ]
}