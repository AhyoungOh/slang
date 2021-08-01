import { useState, useEffect } from 'react';
import axios from 'axios';

function useApiCall(apiUrl, method = 'get', data, isFetchNow = true) {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      let response = null;
      switch (method) {
        case 'get':
          response = await axios.get(apiUrl);
          setPayload(response.data);
          break;
        case 'post':
          response = await axios.post(apiUrl, data);
          setPayload(response);
          break;
        case 'put':
          response = await axios.put(apiUrl, data);
          break;
        case 'delete':
          response = await axios.delete(apiUrl);
          break;
        default:
          break;
      }
    } catch (error) {
      console.dir('api error', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFetchNow) {
      fetchData();
    }
  }, [apiUrl]);

  return [loading, payload, error, fetchData];
}

export default useApiCall;
