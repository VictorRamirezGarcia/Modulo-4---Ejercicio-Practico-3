// src/App.jsx
import React from 'react';
import Header from '@/components/Header';  // Importamos el Header
import Footer from '@/components/Footer';  // Importamos el Footer
import { Outlet } from 'react-router-dom'; // Importamos Outlet para las rutas hijas
import { Profiler } from 'react';

const App = () => {

  const handleRender = (id, phase, actualDuration) => {
    console.log(`${id} render phase: ${phase}, duration: ${actualDuration}`);
  };

  return (
    <Profiler id="App" onRender={handleRender}>
    <div>
      {/* Menú de navegación (Header) */}
      <Header />

      {/* Área donde se cargará el contenido de las rutas */}
      <main>
         {/* Aquí se mostrarán las rutas dinámicas */}
         <Outlet /> {/* Outlet renderiza las rutas hijas */}
      </main>
      {/* Pie de página (Footer) */}
      <Footer />
    </div>
    </Profiler>
  );
};

export default App;