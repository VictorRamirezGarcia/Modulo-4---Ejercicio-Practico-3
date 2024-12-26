// src/views/MedicalTeam.jsx
import React, { useState, useEffect } from 'react';
import DoctorCard from '@/components/DoctorCard';

export default function MedicalTeam() {
  const [doctors, setDoctors] = useState([]);
  const [specialtyFilter, setSpecialtyFilter] = useState('');

  useEffect(() => {
    // Simulando la carga de doctores desde una API
    setDoctors([
      { name: 'Dr. Pérez', specialty: 'Cardiología', yearsOfExperience: 10 },
      { name: 'Dr. Gómez', specialty: 'Pediatría', yearsOfExperience: 8 },
      // Más doctores
    ]);
  }, []);

  const filteredDoctors = specialtyFilter
    ? doctors.filter(doctor => doctor.specialty === specialtyFilter)
    : doctors;

  return (
    <div className="content">
      <h2>Equipo Médico</h2>
      <div>
        <label>Filtrar por especialidad:</label>
        <select onChange={(e) => setSpecialtyFilter(e.target.value)}>
          <option value="">Todos</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Pediatría">Pediatría</option>
        </select>
      </div>
      {filteredDoctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          specialty={doctor.specialty}
          yearsOfExperience={doctor.yearsOfExperience}
        />
      ))}
    </div>
  );
}
