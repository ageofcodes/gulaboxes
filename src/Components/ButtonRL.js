import React from 'react'
import '../App.css'
import { useEffect } from 'react';

const ButtonRL = ({nameRL, RL, setRL}) => {
  useEffect(() => {
    console.log(`RL has changed to ${RL}`);
  }, [RL]);
  return (
    <input 
        className='buttonBoxes'
        type='number'
        min="0"
        max="999"
        placeholder={nameRL}
        onChange={(e) => setRL(e.target.value)}
      />
  );
}

export default ButtonRL