// // src/components/ServiceList.jsx
// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// function ServiceList({  onClickService }) {

//   const [services, setServices] = useState([]);
    
//     useEffect(() => {
//       setServices(['Consulta general', 'Cirugía', 'Pediatría', 'Cardiología']);
//     }, []);
  

//   return (
//     <React.Fragment>
//       <h2>Servicios Médicos</h2>
//       <ul>
//         {services.map((service, index) => (
//           <li key={index} onClick={() => onClickService(service)} style={{ cursor: 'pointer' }}>
//             {service}
//           </li>
//         ))}
//       </ul>
//     </React.Fragment>
//   );
// }

// ServiceList.propTypes = {
//   services: PropTypes.arrayOf(PropTypes.string).isRequired,  // Debe ser un array de cadenas de texto
//   onClickService: PropTypes.func.isRequired,  // Función que maneja el click en un servicio
// };

// export default ServiceList;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ServiceList({ onClickService }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/servicios.json'); 
        if (!response.ok) {
          throw new Error('Error al cargar los servicios');
        }
        const data = await response.json(); // Parseamos la respuesta como JSON
        setServices(data); // Actualizamos el estado con los servicios
      } catch (err) {
        setError(err.message); // En caso de error, actualizamos el estado de error
      } finally {
        setLoading(false); // Terminamos de cargar
      }
    };

    loadServices();
  }, []); // Solo se ejecuta una vez al montar el componente

  if (loading) {
    return <p>Cargando servicios...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <React.Fragment>
      <h2>Servicios Médicos</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id} onClick={() => onClickService(service)} style={{ cursor: 'pointer' }}>
            {service.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

ServiceList.propTypes = {
  onClickService: PropTypes.func.isRequired, // Función que maneja el click en un servicio
};

export default ServiceList;
