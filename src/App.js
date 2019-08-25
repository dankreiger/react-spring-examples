import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Checkout from './components/Checkout/Checkout';
import Modal from './components/Modal/Modal';
import Accordion from './components/Accordion/Accordion';
import Waypoints from './components/Waypoints/Waypoints';

const App = () => {
  const [showRoutesExample, setShowRoutesExample] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });
  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />{' '}
        <button
          onClick={() => setShowRoutesExample(!showRoutesExample)}
          className="example-button"
        >
          Show {showRoutesExample ? 'Modal Example' : 'Routes Example'}
        </button>
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
      </header>
      <main>
        {showRoutesExample ? (
          <Routes />
        ) : (
          <>
            <Modal />
            <Accordion />
            <Waypoints />
          </>
        )}
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  );
};

export default App;
