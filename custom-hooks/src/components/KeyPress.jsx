import React from 'react';
import useKeyPress from '../hooks/useKeyPress';

const KeyPress = () => {
  const hPressed = useKeyPress('h');
  const sPressed = useKeyPress('s');

  return (
    <div>
      <h2>Key Press!</h2>
      { hPressed && <h2>Happy!</h2> }
      { sPressed && <h2>Sad :(</h2> }
    </div>
  );
};

export default KeyPress;
