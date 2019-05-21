import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const Navigation = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarActiveClass: this.setLayoutClass()
    };
  }

  // @todo -- needs further research
  // Access window.location.pathname in react

  setLayoutClass = () => {
    if (typeof window == 'undefined') {
      return '';
    }

    const pathName = window.location.pathname.replace('/', '');
    switch (pathName) {
      case 'learn':
      case 'listen':
      case 'look':
      case 'live':
        return pathName;
      case '':
        return 'home';
      default:
        return 'not-found';
    }
  };

  render() {
    return (
      <nav
        className={`Navigation container ${this.state.navBarActiveClass}`}
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='Navigation-left'>
          <div className='Navigation-list'>
            <Link className='Navigation-item look' to='/look'>
              Look
            </Link>
            <Link className='Navigation-item listen' to='/listen'>
              Listen
            </Link>
            <Link className='Navigation-item learn' to='/learn'>
              Learn
            </Link>
            <Link className='Navigation-item live' to='/live'>
              Live
            </Link>
          </div>
        </div>
        <div className='Navigation-right'>
          <Logo />
        </div>
      </nav>
    );
  }
};

export default Navigation;
