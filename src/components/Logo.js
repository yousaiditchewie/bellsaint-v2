import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';

const logoStyles = {
  display: 'block',
  width: '100%'
};

const preLogoStyles = {
  margin: '0'
};

const logoWrapperStyles = {
  display: 'block',
  width: '50%',
  padding: '1rem'
};

const Logo = () => {
  return (
    <div className="Logo" style={logoWrapperStyles}>
      <p className="preLogo" style={preLogoStyles}>
        A WEBSITE BY
      </p>
      <Link to="/" className="navbar-item" title="Logo">
        <img
          src={logo}
          alt="BELLSAINT"
          className="Logo-img"
          style={logoStyles}
        />
      </Link>
    </div>
  );
};

export default Logo;
