// src/HOCs/withDoctorDetails.jsx
import React, { useState } from 'react';

// Este es el HOC que agrega la funcionalidad de mostrar los detalles de un doctor
const withDoctorDetails = (WrappedComponent) => {
return (props) => {
    const [doctorDetails, setDoctorDetails] = useState(null);

    const fetchDoctorDetails = (doctorName) => {
      // Simulando una llamada a una API para obtener los detalles del doctor
    const details = {
        'Dr. Pérez': { specialty: 'Cardiología', experience: '10 años' },
        'Dr. Gómez': { specialty: 'Pediatría', experience: '8 años' },
    };
    setDoctorDetails(details[doctorName] || {});
    };

    return (
    <WrappedComponent 
        {...props} 
        doctorDetails={doctorDetails} 
        fetchDoctorDetails={fetchDoctorDetails} 
    />
    );
};
};

export default withDoctorDetails;
