import React from 'react'
import '../App.css'
import { useEffect } from 'react';

const ButtonLK = ({nameLK, LK, setLK}) => {
  useEffect(() => {
    console.log(`LK has changed to ${LK}`);
  }, [LK]); 
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue > 99) {
      setLK(80);
    } else {
      setLK(newValue);
    }
  };

  return (
    <input
      className='buttonBoxes'
      type='number'
      min="0"
      max="80"
      placeholder={nameLK}
      onChange={handleChange}/>
  );
}

export default ButtonLK