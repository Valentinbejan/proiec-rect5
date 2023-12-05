import React, { useEffect } from 'react';

const Dublare = () => {
  const numbers = [1, 2, 3, 4, 5];

  useEffect(() => {
    numbers.map(number => console.log(number * 2));
  }, []);

 
};

export default Dublare;
