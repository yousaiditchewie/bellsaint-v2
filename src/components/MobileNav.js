import React from 'react';
import { Link } from 'gatsby';
import MobileLogo from './mobileNav/MobileLogo';
import SocialLinks from './footer/SocialLinks';

const MobileNav = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleMenu = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              activeClass: 'is-open'
            })
          : this.setState({
              activeClass: ''
            });
      }
    );
  };

  render() {
    return (
      <nav
        className={`MobileNav ${this.state.activeClass}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="MobileNav-slideup">
          <div className="MobileNav-linkWrapper">
            <Link className="MobileNav-link" to="/look">
              Look
            </Link>
            <Link className="MobileNav-link" to="/listen">
              Listen
            </Link>
            <Link className="MobileNav-link" to="/learn">
              Learn
            </Link>
            <Link className="MobileNav-link" to="/live">
              Live
            </Link>
            <a
              href="https://bellsaint.myshopify.com/"
              className="MobileNav-shop button"
            >
              SHOP
            </a>
            <div className="MobileNav-socialLinksWrapper">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="MobileNav-bottom">
          <MobileLogo />
          {/* Hamburger menu */}
          <div className="MobileNav-toggleWrapper">
            <div
              className="MobileNav-toggle"
              data-target="navMenu"
              onClick={() => this.toggleMenu()}
            >
              <div className="MobileNav-toggle--middleLine" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default MobileNav;
