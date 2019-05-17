import React from 'react';
import SocialLinks from './footer/SocialLinks';
import Signup from './footer/Signup';

const Footer = class extends React.Component {
  render() {
    return (
      <div className="container">
        <footer>
          <SocialLinks />
          <Signup />
        </footer>
      </div>
    );
  }
};

export default Footer;
