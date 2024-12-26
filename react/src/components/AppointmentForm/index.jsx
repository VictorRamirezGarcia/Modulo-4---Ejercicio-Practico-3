// src/components/AppointmentForm.jsx
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function AppointmentForm({ doctors }) {
  const [patientName, setPatientName] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  // Crear una referencia para el campo de nombre del paciente
  const patientNameInputRef = useRef(null);

  // Enfocar el campo de nombre del paciente al montar el componente
  useEffect(() => {
    if (patientNameInputRef.current) {
      patientNameInputRef.current.focus();
    }
  }, []); // Esto se ejecuta solo una vez, cuando el componente se monta

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cita agendada para:', patientName);
    console.log('Doctor:', selectedDoctor);
    console.log('Fecha:', appointmentDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar una cita</h2>
      <label>
        Nombre del paciente:
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          ref={patientNameInputRef} // Asignar la referencia al campo de entrada
        />
      </label>
      <br />
      <label>
        Seleccionar doctor:
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">Seleccione un doctor</option>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Fecha de la cita:
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Agendar cita</button>
    </form>
  );
}

AppointmentForm.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      yearsOfExperience: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default AppointmentForm;
