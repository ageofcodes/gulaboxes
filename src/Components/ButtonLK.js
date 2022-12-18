import React from 'react'
import '../App.css'
import { useEffect } from 'react';

const ButtonLK = ({nameLK, LK, setLK}) => {
  useEffect(() => {
    console.log(`LK has changed to ${LK}`);
  }, [LK]); 


  return (
     <input
        className='buttonBoxes'
        type='number'
        min="0"
        max="999"
        placeholder={nameLK}
        onChange={(e) => setLK(e.target.value)}
      />
  );
}

export default ButtonLK