import React from 'react';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring } from 'react-spring';

const Gesture2 = () => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const bind = useGesture(({ down, delta }) => {
    if (down) {
      set({ x: delta[0] });
    } else {
      if (delta[0] > 400) {
        alert('goodbye');
        set({ x: 500 });
      } else if (delta[0] < -400) {
        alert('goodbye');
        set({ x: -500 });
      } else {
        set({ x: 0 });
      }
    }
  });
  return (
    <animated.div
      style={{
        opacity: x.interpolate({
          map: Math.abs,
          range: [0, 400],
          output: [1, 0]
        }),
        transform: x.interpolate(x => `translate3d(${x}px,  0px, 0)`)
      }}
      {...bind()}
      className="box no-y"
    />
  );
};

export default Gesture2;