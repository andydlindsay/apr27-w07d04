import React from 'react';
import useInput from '../hooks/useInput';

const Input = () => {
  const usernameInput = useInput('');
  const passwordInput = useInput('');

  return (
    <div>
      <h1>Inputs</h1>
      <button onClick={usernameInput.reset}>Clear username</button>
      <div>
        <label htmlFor="username">Username:</label>
        <input 
          type="text"
          id="username"
          {...usernameInput}
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          {...passwordInput}
        />
      </div>
      <div>
        <p>username: {usernameInput.value}</p>
        <p>password: {passwordInput.value}</p>
      </div>
    </div>
  );
};

export default Input;
