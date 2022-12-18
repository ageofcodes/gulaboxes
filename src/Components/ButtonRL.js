import React from 'react'
import '../App.css'
import { useEffect } from 'react';

const ButtonRL = ({nameRL, RL, setRL}) => {
  useEffect(() => {
    console.log(`RL has changed to ${RL}`);
  }, [RL]);
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue > 99) {
      setRL(80);
    } else {
      setRL(newValue);
    }
  };
  return (
    <input 
        className='buttonBoxes'
        type='number'
        min="0"
        max="80"
        placeholder={nameRL}
        onChange={handleChange}
      />
  );
}

export default ButtonRL