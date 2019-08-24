import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

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
        <Routes />
      </main>
    </animated.div>
  );
};

export default App;
