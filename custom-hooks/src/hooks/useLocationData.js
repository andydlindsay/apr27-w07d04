import React from 'react';

const useLocationData = () => {
  const [position, setPosition] = React.useState({ lat: 0, lon: 0 });

  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  }, []);

  return position;
};

export default useLocationData;
