

import React, { useState } from 'react';
import Timer from './Timer';
const TimerContainer = () => {
  const [isTimerVisible, setIsTimerVisible] = useState(true);
  const [initialTime, setInitialTime] = useState(300); 
  const handleTimerClose = () => {
    setIsTimerVisible(false);
  };

  const handleTimerOpen = () => {
    setIsTimerVisible(true);
  };

  return (
    <div>
      {isTimerVisible ? (
        <Timer
          initialTime={60}
          onFinish={() => console.log('Timer finished')}
          onClose={handleTimerClose}
        />
      ) : (
        <button onClick={handleTimerOpen}>Show Timer</button>
      )}
    </div>
  );
};

export default TimerContainer;
