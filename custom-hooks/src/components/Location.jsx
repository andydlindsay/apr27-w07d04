import React from 'react';
import useLocationData from '../hooks/useLocationData';

const Location = () => {
  const coords = useLocationData();

  const handleClick = () => {
    alert(`You are at ${coords.lat}, ${coords.lon}`);
  };

  return (
    <div>
      <h1>User Location</h1>
      <button onClick={handleClick}>Show Your Location!!</button>
    </div>
  );
};

export default Location;
