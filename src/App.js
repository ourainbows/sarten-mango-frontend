import React from "react";
import { Routes, Route } from 'react-router';
import Ordenes from './components/paginas/Ordenes';
import Usuarios from './components/paginas/Usuarios';
import Productos from './components/paginas/Productos';
import NuevoProducto from './components/paginas/NuevoProducto';
import NuevoUsuario from './components/paginas/NuevoUsuario';
import NuevaOrden from './components/paginas/NuevaOrden';
import CreateProducto from "./components/paginas/NuevoProducto";
import CreatePersona from "./components/paginas/NuevoUsuario";
import Sidebar from './components/ui/Sidebar';

function App() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
     
      <div className="md:w-2/5 xl:w-4/5 p-6">
            <Routes>
                <Route path="/" element={<Ordenes />  } />
                <Route path="/usuarios" element={<Usuarios />  } />
                <Route path="/productos" element={<Productos />  } />
                <Route path="/nuevo-producto" element={<NuevoProducto />  } />
                <Route path="/nuevo-usuario" element={<NuevoUsuario />  } />
                <Route path="/nueva-orden" element={<NuevaOrden />  } />
                <Route path="/persona/create/:idpersona" element={<CreatePersona />} />
                <Route path="/cookware/create/:idcookware" element={<CreateProducto />} />
            </Routes>
          </div>
          </div>
  );
}

export default App;
