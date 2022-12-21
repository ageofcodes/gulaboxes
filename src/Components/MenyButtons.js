import React from 'react'
import ButtonLK from "./ButtonLK";
import ButtonRL from "./ButtonRL";
import ButtonKärl from "./ButtonKärl";

const MenyButtons = ({LK, setLK, nameLK, RL, setRL, nameRL, Kärl, setKärl, nameKärl}) => {
  return (
    <div className="manuwrapper">
      <ButtonLK
        LK={LK}
        setLK={setLK}
        nameLK={nameLK}/>
      <ButtonRL 
        RL={RL}
        setRL={setRL}
        nameRL={nameRL}/>
      <ButtonKärl 
        Kärl={Kärl}
        setKärl={setKärl}
        nameKärl={nameKärl}/>
    </div>
    
  )
}

export default MenyButtons