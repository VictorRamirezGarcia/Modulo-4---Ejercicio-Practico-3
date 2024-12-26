// routes.js
import React from 'react'
import Home from '@/views/home'
import MedicalTeam from '@/views/medical-team'
import Contact from '@/views/contact'
import App from '@/App' 

export const routes = [
    {
    path: "/",
    element: <App />,  // La ruta raíz renderiza App (como contenedor)
    children: [
        { path: "home", element: <Home /> },  // Ruta /home renderiza Home
        { path: "medical-team", element: <MedicalTeam /> },  // Ruta /medical-team renderiza MedicalTeam
        { path: "contact", element: <Contact /> },  // Ruta /contact renderiza Contact
    ],
    },
];