import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

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
        className="Navigation container"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="Navigation-left">
          <div className="Navigation-list">
            <Link className="Navigation-item look" to="/look">
              Look
            </Link>
            <Link className="Navigation-item listen" to="/listen">
              Listen
            </Link>
            <Link className="Navigation-item learn" to="/learn">
              Learn
            </Link>
            <Link className="Navigation-item live" to="/live">
              Live
            </Link>
          </div>
        </div>
        <div className="Navigation-right">
          <Logo />
        </div>
      </nav>
    );
  }
};

export default Navigation;
