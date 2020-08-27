import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

//Crear la referencia al context
export const RecetasContext = createContext()


//Crear provider donde se encuentran las funciones y state
const RecetasProvider = (props) => {
    console.log('leemos recetas')
    //Busqueda Recetas Guardar Busqueda
    const [recetas, guardarRecetas] = useState([])

    //Guardar recestas
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    })

    //Consultar
    const [consultar, guardarConsultar] = useState(false)

    const { nombre, categoria } = busqueda

    //consultar la Api

    useEffect(() => {
        const obtenerRecetas = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
            const recetas = await Axios.get(url)
            // console.log(recetas.data.drinks)
            guardarRecetas(recetas.data.drinks)
            console.log('leemos recetas 2')
        }
        obtenerRecetas()
    }, [busqueda])
    console.log('dentro de context', recetas)


    //Dento de las dos etiquetas usamos los props
    return (
        <RecetasContext.Provider value={{ recetas, buscarRecetas, guardarConsultar }}>

            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider
