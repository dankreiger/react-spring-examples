import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

const Nav = ({ navAnimation }) => {
  return (
    <animated.div style={navAnimation} className="nav-wrapper">
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Store</a>
        <a href="#">Tutorials</a>
      </nav>
    </animated.div>
  );
};

Nav.propTypes = {
  navAnimation: PropTypes.object.isRequired
};

export default Nav;
