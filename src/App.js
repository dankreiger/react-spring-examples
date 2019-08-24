import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
// import Routes from './Routes';
import Checkout from './components/Checkout/Checkout';
import Modal from './components/Modal/Modal';

const App = () => {
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
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
      </header>
      <main>
        <Modal />
        {/* <Routes /> */}
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  );
};

export default App;
