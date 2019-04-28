import React from 'react';
import { Link } from 'gatsby';

const Navigation = class extends React.Component {
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
      <nav
        className="Navigation"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              BELLSAINT
            </Link>
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
          <div className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/look">
                Look
              </Link>
              <Link className="navbar-item" to="/listen">
                Listen
              </Link>
              <Link className="navbar-item" to="/learn">
                Learn
              </Link>
              <Link className="navbar-item" to="/live">
                Live
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navigation;
