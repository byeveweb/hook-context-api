import React from 'react';
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'

import Header from './header/Header'
import Formulario from './recetas/Formulario'
import Listado from './recetas/Listado'

function App() {
  console.log('leemos app')
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>

          <Listado />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
