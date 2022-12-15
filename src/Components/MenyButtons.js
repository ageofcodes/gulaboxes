import React from 'react'
import ButtonLK from "./ButtonLK";
import ButtonRL from "./ButtonRL";

const MenyButtons = ({LK, setLK, nameLK, RL, setRL, nameRL}) => {
  return (
    <div className="manuwrapper">
      <ButtonLK
        LK={LK}
        setLK={setLK}
        nameLK={nameLK}
     />
      <ButtonRL 
        RL={RL}
        setRL={setRL}
        nameRL={nameRL}
     />
    </div>
  )
}

export default MenyButtons