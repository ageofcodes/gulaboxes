import React from 'react'
import ButtonLK from "./ButtonLK";
import ButtonRL from "./ButtonRL";
import ButtonKärl from "./ButtonKärl";
import ButtonPallLyft from "./ButtonPallLyft";

const MenyButtons = ({LK, setLK, nameLK, RL, setRL, nameRL, Kärl, setKärl, nameKärl, PallLyft, setPallLyft, namePallLyft}) => {
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
      <ButtonPallLyft 
        PallLyft={PallLyft}
        setPallLyft={setPallLyft}
        namePallLyft={namePallLyft}/>
    </div>
    
  )
}

export default MenyButtons