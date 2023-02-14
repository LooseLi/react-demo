import {useEffect, useState} from 'react';

function useLocalStorage(key, value) {
  const [message, setMessage] = useState(value);
  useEffect(() => {
    window.localStorage.setItem(key, message);
  }, [key, message]);
  return [message, setMessage];
}

export default useLocalStorage;
