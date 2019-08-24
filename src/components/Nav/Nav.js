import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

const Nav = ({ navAnimation }) => {
  return (
    <animated.div style={navAnimation} className="nav-wrapper">
      <nav>
        <a href="https://www.dankreiger.com">Home</a>
        <a href="https://www.dankreiger.com">About</a>
        <a href="https://www.dankreiger.com">Store</a>
        <a href="https://www.dankreiger.com">Tutorials</a>
      </nav>
    </animated.div>
  );
};

Nav.propTypes = {
  navAnimation: PropTypes.object.isRequired
};

export default Nav;
