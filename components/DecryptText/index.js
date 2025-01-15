import { useDencrypt } from 'use-dencrypt-effect';
import { useEffect, useRef } from 'react';

const DecryptText = ({ values, delay }) => {
  const { dencrypt, result } = useDencrypt(); // Make sure the hook is providing both dencrypt and result
  const indexRef = useRef(0);

  useEffect(() => {
    if (typeof dencrypt !== 'function') {
      console.error('dencrypt is not a function');
      return;
    }

    const action = setInterval(() => {
      dencrypt(values[indexRef.current]); // Decrypt the current value
      indexRef.current = (indexRef.current + 1) % values.length; // Cycle through the values
    }, delay);

    return () => clearInterval(action); // Cleanup the interval on component unmount
  }, [dencrypt, values, delay]);

  return <div>{result}</div>; // Render the decrypted text
};

export default DecryptText;
