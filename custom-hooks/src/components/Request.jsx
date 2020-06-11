import React from 'react';
import useRequest from '../hooks/useRequest';

const Request = () => {
  const {data, loading} = useRequest('https://www.dnd5eapi.co/api/classes');

  return (
    <div>
      <h2>Request!</h2>
      { loading && <p>Please wait...</p> }
      { data.results && data.results.map((classObj) => (
        <p key={classObj.index}>{classObj.name}</p>
      )) }
    </div>
  );
};

export default Request;
