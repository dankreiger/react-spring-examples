import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { animated, useTransition } from 'react-spring';

const Modal = ({ animation, closeModal, pointerEvents }) => {
  const [closing, setClosing] = useState(false);
  const handleCloseModal = () => {
    setClosing(true);
    closeModal();
  };
  return createPortal(
    <div
      className={`modal ${closing ? 'exiting' : ''}`}
      style={{ pointerEvents }}
    >
      <animated.div style={animation} className="modal-card">
        <button onClick={handleCloseModal}>Close</button>

        <h1>Modal</h1>
      </animated.div>
    </div>,
    document.querySelector('#modal-portal')
  );
};

const ModalWrapper = () => {
  const [on, toggle] = useState(false);
  const transition = useTransition(on, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,-40px,0)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0,0,0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0,-40px,0)'
    }
  });
  const pointerEvents = on ? 'all' : 'none';
  return (
    <div>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              key={key}
              pointerEvents={pointerEvents}
              animation={animation}
              closeModal={() => toggle(false)}
            />
          )
      )}
      <button onClick={() => toggle(!on)}>Open</button>
    </div>
  );
};

export default ModalWrapper;
