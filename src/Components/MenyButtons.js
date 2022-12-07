import React from 'react'
import ButtonLK from "./ButtonLK";
import ButtonRL from "./ButtonRL";
import Submit from "./Submit";
import { useState } from "react";

const MenyButtons = () => {
    const [LK, setLK] = useState(0);
    const nameLK = "LK";
    const [RK, setRK] = useState(0);
    const nameRL = "RL";

  return (
    <div className="manuwrapper">
      <ButtonLK
        nameLK={nameLK}
        LK={LK}
        setLK={setLK}
      />
      <ButtonRL 
        nameRL={nameRL}
        RL={RK}
        setRL={setRK}
      />
      <Submit />
      </div>
  )
}

export default MenyButtons