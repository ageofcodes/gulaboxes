import React from 'react'
import ShowLK from "./ShowLK";
import ShowRL from "./ShowRL";


/* need position of rl och lk här utanför den componeten (ShowXX). */

const Boxes = ({LK, RL}) => {
  return (
<>
    <ShowRL 
    x={9}
    y={0}
    z={81}
      />
    <ShowLK 
    x={-9}
    y={0}
    z={81}
      />
          <ShowLK 
    x={-9}
    y={16.83}
    z={81}
      />

</>
  )
}

export default Boxes