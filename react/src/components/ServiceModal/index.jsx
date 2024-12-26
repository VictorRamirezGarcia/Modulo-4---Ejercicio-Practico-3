// src/components/ServiceModal.jsx
import React from 'react';
import ReactDOM from 'react-dom'; // Importamos ReactDOM para usar el portal
import PropTypes from 'prop-types';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;  // Si no hay servicio, no mostramos nada

  // Comprobamos si el contenedor existe
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    console.error("El contenedor 'modal-root' no existe en el DOM.");
    return null;
  }

  return ReactDOM.createPortal(  // Usamos createPortal para renderizar fuera del DOM principal
    <div className="modal">
      <div className="modal-content">
        <h2>Detalles del Servicio</h2>
        <p><strong>Servicio:</strong> {service}</p>
        <p><strong>Descripción:</strong> Este es un servicio médico del hospital que proporciona atención de calidad a los pacientes.</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>,
    modalRoot  // El portal se renderiza en el nodo modal-root
  );
};

ServiceModal.propTypes = {
  service: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ServiceModal;
