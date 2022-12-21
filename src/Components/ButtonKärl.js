import React from 'react'
import '../App.css'
import { useEffect } from 'react';

const ButtonKärl = ({nameKärl, Kärl, setKärl}) => {
  useEffect(() => {
    console.log(`Kärl has changed to ${Kärl}`);
  }, [Kärl]); 
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue > 16) {
      setKärl(16);
    } else {
      setKärl(newValue);
    }
  };

  return (
    <input
      className='buttonBoxes'
      type='number'
      min="0"
      max="16"
      placeholder={nameKärl}
      onChange={handleChange}/>
  );
}

export default ButtonKärl