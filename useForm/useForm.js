import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        // Desestructurar de target.
        const {name, value} = target;
        setFormState({
            ...formState,
            // Establecer nuevo estado.
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return{
        ...formState,
        formState, 
        onInputChange,
        onResetForm,
    }
}
