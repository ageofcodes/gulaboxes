import React from 'react'
import '../App.css'
import { useEffect } from 'react';

const ButtonPallLyft = ({namePallLyft, PallLyft, setPallLyft}) => {
  useEffect(() => {
    console.log(`PallLyft has changed to ${PallLyft}`);
  }, [PallLyft]); 
  
  const handleChange = (e) => {
    const newValue = e.target.checked;
    if (newValue === true) {
      setPallLyft(true);
    } else {
      setPallLyft(false);
    }
  }

  return (
    <input
      className='buttonCheckBoxes'
      type='checkbox'
      onChange={handleChange}
      defaultChecked= {PallLyft}
/>
  );
}

export default ButtonPallLyft