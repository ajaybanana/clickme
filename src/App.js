import './App.css';
import React, { useState } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = () => {
      setClickCount(clickCount + 1);
     if (clickCount > 7 && (clickCount % 7) == 0) {
      setDarkMode(true);
     setClickCount(clickCount + 1); 
    } else {
      setDarkMode(false);
    }
  };
  const handleStartOver = () => {
    setClickCount(0);
    setDarkMode(false);
  };
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Click Count: {clickCount}</h1>
      <button onClick={handleButtonClick}>Click Me</button>
      <button onClick={handleStartOver}>Start Over</button>
    </div>
  );
}

export default App;

