import React, { useState, useRef } from 'react';
import { animated, useSpring, useChain, useTransition } from 'react-spring';

const BoxesChain = () => {
  const [on, toggle] = useState(false);
  const springRef = useRef();

  const { size } = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '100%' : '20%' }
  });

  const transitionRef = useRef();

  const items = [0.6, 0.3, 0.7, 0.2, 1, 10, 2, 11, 12, 13, 15, 16];

  const transition = useTransition(on ? items : [], item => item, {
    ref: transitionRef,
    trail: 400 / items.length,
    from: {
      opacity: 1,
      transform: 'scale(0)'
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)'
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)'
    }
  });

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);
  return (
    <div className="full-height">
      Click the white box
      <animated.div
        style={{ width: size, height: size }}
        className="boxes-grid-two"
        onClick={() => toggle(!on)}
      >
        {transition.map(({ item, key, props }) => (
          <animated.div key={key} className="box-two" style={props} />
        ))}
      </animated.div>
    </div>
  );
};

export default BoxesChain;
