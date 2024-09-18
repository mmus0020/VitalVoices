import React, { useState, useEffect } from 'react';

const DigitRoller = ({ digit, duration }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % 10);
    }, duration / 10);

    setTimeout(() => {
      clearInterval(intervalId);
      setPosition(digit);
    }, duration);

    return () => clearInterval(intervalId);
  }, [digit, duration]);

  return (
    <div style={{ overflow: 'hidden', height: '1em', display: 'inline-block' }}>
      <div style={{ transition: `transform ${duration}ms ease-out`, transform: `translateY(-${position}em)` }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} style={{ height: '1em' }}>{num}</div>
        ))}
      </div>
    </div>
  );
};

const RollingNumber = ({ value, duration = 2000 }) => {
  const digits = String(value).split('').map(Number);

  return (
    <span className="rolling-number" style={{ fontWeight: 'bold', color: '#ff5a3c' }}>
      $
      {digits.map((digit, index) => (
        <DigitRoller key={index} digit={digit} duration={duration} />
      ))}
    </span>
  );
};

export default RollingNumber;