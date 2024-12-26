// src/components/ServiceList.jsx
import React, { useState, useEffect } from 'react';

function ServiceList({ onClickService }) {

  const [services, setServices] = useState([]);
    //const services = ['Consulta general', 'Cirugía', 'Pediatría', 'Cardiología']
    useEffect(() => {
      setServices(['Consulta general', 'Cirugía', 'Pediatría', 'Cardiología']);
    }, []);
  

  return (
    <React.Fragment>
      <h2>Servicios Médicos</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index} onClick={() => onClickService(service)} style={{ cursor: 'pointer' }}>
            {service}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ServiceList;