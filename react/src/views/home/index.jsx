// src/views/home.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate para la navegación
import ServiceList from '@/components/ServiceList';
import ServiceModal from '@/components/ServiceModal';
import Information from '../../components/information';

export default function Home() {

  const [selectedService, setSelectedService] = useState(null);  // Estado para el servicio seleccionado
  const navigate = useNavigate();  // Hook para navegar a otras páginas

  // Crear referencias para las secciones
  const informationSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);

  // Funciones de desplazamiento a cada sección
  const scrollToInformation = () => {
    informationSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);  // Establecemos el servicio seleccionado cuando se hace clic
  };

  const handleCloseModal = () => {
    setSelectedService(null);  // Cerramos el modal
  };

  // Función para redirigir a la página de doctores
  const goToDoctors = () => {
    navigate('./medical-team');  // Navegamos a la página de doctores
  };
 
  return (
    <React.Fragment>
      {/* Botones para desplazarse */}
      <div>
        <button onClick={goToDoctors}>Ir a Doctores</button> {/* Botón actualizado */}
      </div>

      {/* Sección de Información */}
      <div ref={informationSectionRef}>
        <Information />
      </div>

      {/* Sección de Lista de Servicios */}
      <div ref={servicesSectionRef}>
        <ServiceList onClickService={handleServiceClick} />
      </div>

      {/* Si hay un servicio seleccionado, mostramos el modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}  // Función para cerrar el modal
        />
      )}
    </React.Fragment>
  );
}
