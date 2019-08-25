import React from 'react';
import PropTypes from 'prop-types';
import {
  useSpring,
  animated
  //config
} from 'react-spring';
const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    // config: config.molasses,
    onRest: () => console.log('animation is at a stand still')
  });
  return (
    <div
      className="checkout"
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0,0)`)
        }}
        className="checkout-left"
      />
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x}%, 0,0)`)
        }}
        className="checkout-right"
      />
    </div>
  );
};

Checkout.propTypes = {
  isOpen: PropTypes.bool
};

export default Checkout;
