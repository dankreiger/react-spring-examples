import React, { useState } from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
//import PropTypes from 'prop-types';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    // fontSize: isToggled ? '2rem' : '5em',
    color: isToggled ? 'tomato' : 'green',
    y: isToggled ? 0 : -50
  });
  return (
    <div>
      <animated.h1
        style={{
          transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
          color
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

// const AnimatedTitle = animated.h1

Toggle.propTypes = {};

export default Toggle;
