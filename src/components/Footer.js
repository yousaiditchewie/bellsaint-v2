import React from 'react';
import SocialLinks from './footer/SocialLinks';
import Signup from './footer/Signup';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer-content">
          <SocialLinks />
          <Signup />
        </div>
      </footer>
    );
  }
};

export default Footer;
