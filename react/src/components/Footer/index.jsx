// src/components/Footer.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
return (
    <footer>
    <p>© 2024 Hospital XYZ</p>
    </footer>
);
};

Footer.propTypes = {
    year: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    year: new Date().getFullYear(),
    companyName: 'Hospital XYZ',
};

export default Footer;
