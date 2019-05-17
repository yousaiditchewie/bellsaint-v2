import React from 'react';
import { Link } from 'gatsby';
import MobileLogo from './mobileNav/MobileLogo';

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
              navigationActiveClass: 'is-open'
            })
          : this.setState({
              navigationActiveClass: ''
            });
      }
    );
  };

  render() {
    return (
      <nav className="MobileNav" role="navigation" aria-label="main-navigation">
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
          </div>
        </div>
        <div className="MobileNav-bottom">
          <MobileLogo />
          {/* Hamburger menu */}
          <div
            className={`navigation ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
    );
  }
};

export default MobileNav;
