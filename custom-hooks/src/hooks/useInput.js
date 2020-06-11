import React from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return { value, onChange, reset };  
};

export default useInput;
