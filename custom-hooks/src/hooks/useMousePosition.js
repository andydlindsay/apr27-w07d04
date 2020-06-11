import React from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const mouseMoveHandler = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => document.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  return coords;
};

export default useMousePosition;
