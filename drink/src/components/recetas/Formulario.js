import React, { useState, useContext } from 'react';
import { CategoriasContext } from './../context/CategoriasContext'
import { RecetasContext } from './../context/RecetasContext'


const Formulario = () => {

    const { categorias } = useContext(CategoriasContext)
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext)

    //Recogemos datos del formulari

    //1º State
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const { nombre, categoria } = busqueda

    //2º Leer datos
    const obtenerDatos = e => {
        guardarBusqueda(
            {
                ...busqueda,
                [e.target.name]: e.target.value
            }
        )
    }

    //Enviamos datos

    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault()
                buscarRecetas(busqueda)
                guardarConsultar(true)
            }}
        >

            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatos}
                        value={nombre}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatos}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>)}

                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>);
}

export default Formulario;