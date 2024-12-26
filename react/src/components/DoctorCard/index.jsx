// src/components/DoctorCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withDoctorDetails from '@/HOC/withDoctorDetails';

const DoctorCard = ({ name, doctorDetails, fetchDoctorDetails }) => {

const [showDetails, setShowDetails] = useState(false);

const handleClick = () => {
    fetchDoctorDetails(name);  // Llamamos a la función para cargar los detalles del doctor
    setShowDetails(!showDetails);  // Alternamos la visibilidad de los detalles
};

return (
    <React.Fragment> 
    <h3>{name}</h3>
    <button onClick={handleClick}>
        {showDetails ? 'Ocultar detalles' : 'Mostrar detalles'}
    </button>

    {showDetails && doctorDetails && (
        <div className="doctor-details">
        <p>Especialidad: {doctorDetails.specialty}</p>
        <p>Años de experiencia: {doctorDetails.experience}</p>
        </div>
    )}
    </React.Fragment>
);
};

DoctorCard.propTypes = {
    name: PropTypes.string.isRequired,
    doctorDetails: PropTypes.shape({
    specialty: PropTypes.string,
    experience: PropTypes.number,
    }),
    fetchDoctorDetails: PropTypes.func.isRequired,
};

DoctorCard.defaultProps = {
    doctorDetails: null,
};

// Envolvemos DoctorCard con el HOC
export default withDoctorDetails(DoctorCard);
