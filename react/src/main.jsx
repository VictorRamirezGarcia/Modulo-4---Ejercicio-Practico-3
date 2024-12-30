// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { routes } from './config/routes'  // Asegúrate de que las rutas sean correctas
import Navbar from '@/components/Navbar'; // Importa el componente Navbar

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar /> 
      {/* Las rutas comienzan después del navbar */}
      <div style={{ marginTop: '60px' }}> {/* Espacio para no solapar el navbar */}
    <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children && route.children.map((child, childIndex) => (
              <Route key={childIndex} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)