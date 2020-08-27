import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

//Crear la referencia al context
export const CategoriasContext = createContext()

//Crear provider donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //creamos nuestro state context
    const [categorias, guardarCategorias] = useState([])

    //ejecutar el llamaod a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await Axios.get(url)
            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    }, [])

    //Dento de las dos etiquetas usamos los props
    return (
        <CategoriasContext.Provider value={{ categorias }}>

            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider
