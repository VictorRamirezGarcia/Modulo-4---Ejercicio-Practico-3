import React, { useState, useEffect, Profiler} from 'react';

import AppointmentForm from '@/components/AppointmentForm';

// Componente de la sección de Contacto
export default  function Contact() {

  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulando la carga de datos (esto normalmente vendría de una API)
    setDoctors([
      { name: 'Dr. Pérez', specialty: 'Cardiología', yearsOfExperience: 10 },
      { name: 'Dr. Gómez', specialty: 'Pediatría', yearsOfExperience: 8 },
    ]);

    setServices(['Consulta general', 'Cirugía', 'Pediatría', 'Cardiología']);
  }, []);

  return (
    <div className="content">
    <AppointmentForm doctors={doctors} />

      <h3>Contacto</h3>
      <p>Teléfono: +1 234 567 890</p>
      <p>Email: contacto@hospital.com</p>
      <p>Dirección: Calle 123, Ciudad, País</p>
    </div>
  )
}
