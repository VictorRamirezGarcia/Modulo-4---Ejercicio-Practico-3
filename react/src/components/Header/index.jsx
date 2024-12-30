// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Usamos Link para la navegación
import PropTypes from 'prop-types';

const Header = () => {
return (
<header>
</header>
);
};

Header.propTypes = {
    links: PropTypes.arrayOf(
    PropTypes.shape({
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default Header;
