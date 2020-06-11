import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useMousePosition from '../hooks/useMousePosition';

const Title = () => {
  // const [title] = React.useState('hooks are great!');
  const coords = useMousePosition();
  useDocumentTitle(`x: ${coords.x}, y: ${coords.y}`);

  return (
    <div>
      <h1>Use Document Title</h1>
    </div>
  )
};

export default Title;
