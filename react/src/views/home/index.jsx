// src/views/home.jsx
import React, { useState, useEffect } from 'react';
import ServiceList from '@/components/ServiceList';  // El componente que muestra la lista de servicios
import ServiceModal from '@/components/ServiceModal';  // El modal para mostrar detalles de un servicio
import Information from '../../components/information';

export default function Home() {

  const [selectedService, setSelectedService] = useState(null);  // Estado para el servicio seleccionado

  const handleServiceClick = (service) => {
    setSelectedService(service);  // Establecemos el servicio seleccionado cuando se hace clic
  };

  const handleCloseModal = () => {
    setSelectedService(null);  // Cerramos el modal
  };

  return (
    <div className="content">
      <Information/> 
      <ServiceList onClickService={handleServiceClick} />  {/* Pasamos la función para abrir el modal */}

      {/* Si hay un servicio seleccionado, mostramos el modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}  // Función para cerrar el modal
        />
      )}
    </div>
  );
}
