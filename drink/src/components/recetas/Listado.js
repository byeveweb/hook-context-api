import React, { useContext } from 'react';
import { RecetasContext } from './../context/RecetasContext'
// import Receta from './Receta'

const ListadoRecetas = () => {
    console.log('leemos Lisatdo')

    //Extraer Recetas
    const { recetas } = useContext(RecetasContext)

    if (recetas === undefined) return null;

    console.log('fuera del context-----', recetas)

    return (
        <div className="row mt-5">

            hola
        </div>

    );
}

export default ListadoRecetas;