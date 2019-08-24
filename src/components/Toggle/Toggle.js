import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
//import PropTypes from 'prop-types';

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: 'W',
      key: 1
    },
    {
      letter: 'a',
      key: 2
    },
    {
      letter: 'u',
      key: 3
    },
    {
      letter: 's',
      key: 4
    },
    {
      letter: 't',
      key: 5
    },
    {
      letter: 'e',
      key: 6
    },
    {
      letter: 'r',
      key: 7
    }
  ]);

  // useTransition mounts and unmounts items
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 style={props} key={key}>
          {item.letter}
        </animated.h1>
      ))}
      <button
        onClick={() =>
          setItems([
            {
              letter: 'D',
              key: 1
            },
            {
              letter: 'O',
              key: 2
            },
            {
              letter: 'G',
              key: 3
            }
          ])
        }
      >
        Toggle
      </button>
    </div>
  );
};

// const AnimatedTitle = animated.h1

Toggle.propTypes = {};

export default Toggle;

// const [isToggled, setToggle] = useState(false);

// const transition = useTransition(isToggled, null, {
//   from: { opacity: 0, position: 'absolute' },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 }
// });

// <div style={{ position: 'relative' }}>
// <button onClick={() => setToggle(!isToggled)}>Toggle</button>
// {transition.map(({ item, key, props }) =>
//   item ? (
//     <animated.h1 style={props}>The english dog barks</animated.h1>
//   ) : (
//     <animated.h1 style={props}>The German dog wauwaus</animated.h1>
//   )
// )}
// </div>
