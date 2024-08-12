
import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

const Timer = ({ initialTime, onFinish, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const timerRef = useRef(null); 
  const startX = useRef(0); 
  const startY = useRef(0); 
  const offsetX = useRef(0); 
  const offsetY = useRef(0); 

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            if (onFinish) onFinish();
            return 0;
          }
          return prevTime - 1;
        });
      }, 120);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (onFinish) onFinish();
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, onFinish]);

  const startTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(initialTime);
    }
    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(initialTime);
  };

  const closeTimer = () => {
    setIsVisible(false);
    if (onClose) onClose(); 
  };

  const onMouseDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    const rect = timerRef.current.getBoundingClientRect();
    offsetX.current = e.clientX - rect.left;
    offsetY.current = e.clientY - rect.top;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e) => {
    if (timerRef.current) {
      const x = e.clientX - offsetX.current;
      const y = e.clientY - offsetY.current;
      timerRef.current.style.left = `${x}px`;
      timerRef.current.style.top = `${y}px`;
    }
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  if (!isVisible) return null;

  return (
    <div
      ref={timerRef}
      className="timer"
      onMouseDown={onMouseDown} 
    >
     
      <h4>
        Timer: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
      </h4>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
      <button onClick={resetTimer} disabled={timeLeft === initialTime}>Reset</button>
    </div>
  );
};

export default Timer;
