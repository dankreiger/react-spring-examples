import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle/Toggle';
//import Nav from './components/Nav/Nav';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  // const navAnimation = useSpring({
  //   transform: isNavOpen ? `translate3d(0, 0,0)` : `translate3d(100%, 0,0)`
  // });
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
        {/* <Nav navAnimation={navAnimation} /> */}
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
};

export default App;
