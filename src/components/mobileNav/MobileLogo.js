import React from 'react';
import { Link } from 'gatsby';
import logo from '../../img/logo-bw.png';

const MobileLogo = () => {
  return (
    <div className="MobileLogo">
      <Link to="/" className="MobileLogo-link" title="MobileLogo-image">
        <img src={logo} alt="BELLSAINT" className="MobileLogo-img" />
      </Link>
    </div>
  );
};

export default MobileLogo;
