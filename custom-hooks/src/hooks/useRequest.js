import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(result => {
        setLoading(false);
        setData(result.data);
        setErrorMsg('');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        setErrorMsg('Error loading data');
      });
  });

  return { data, loading, errorMsg };
};

export default useRequest;
