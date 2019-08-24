import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
//import PropTypes from 'prop-types';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const transition = useTransition(isToggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.h1 key={key} style={props}>
              Hello
            </animated.h1>
          )
      )}
    </div>
  );
};

// const AnimatedTitle = animated.h1

Toggle.propTypes = {};

export default Toggle;
