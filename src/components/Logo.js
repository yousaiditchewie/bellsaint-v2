import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo-bw.png';

const logoStyles = {
  display: 'block',
  width: '100%'
};

const preLogoStyles = {
  margin: '0',
  fontWeight: '300'
};

const logoWrapperStyles = {
  padding: '1rem 0',
  maxWidth: '80%',
  width: '100%',
  margin: '0 auto'
};

const Logo = () => {
  return (
    <div className="Logo" style={logoWrapperStyles}>
      <p className="preLogo" style={preLogoStyles}>
        A WEBSITE BY
      </p>
      <Link to="/" className="navbar-item" title="Logo-image">
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
