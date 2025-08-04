import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondHandStyle = {
    transform: `rotate(${seconds * 6}deg)`
  };
  const minuteHandStyle = {
    transform: `rotate(${minutes * 6 + seconds * 0.1}deg)`
  };
  const hourHandStyle = {
    transform: `rotate(${hours * 30 + minutes * 0.5}deg)`
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="hand hour-hand" style={hourHandStyle}></div>
        <div className="hand minute-hand" style={minuteHandStyle}></div>
        <div className="hand second-hand" style={secondHandStyle}></div>
        <div className="center-dot"></div>
      </div>
    </div>
  );
}

export default App;