import React from 'react'
import ShowLK from "./ShowLK";
import ShowRL from "./ShowRL";

const Boxes = ({LK, RL}) => {
  const sideRight = (-27)
  const sideMiddle = (-9)
  const sideLeft = (9)
  const forwardStart = (-36)
  const ground = (0)
  const stacked = (16.83)
  const sizeLK = (27)
  const sizeRL = (45)
  let startValueRowA = forwardStart
  let startValueRowB = forwardStart
  let startValueRowC = forwardStart
  let isStackedA = true
  let isStackedB = true
  let isStackedC = true
  const showBoxes = [];
  

  let oneMoreRL = false;
  let RLamount = RL
  if (RL % 2 === 1) {
    oneMoreRL = true;
    RLamount -= 1
} else if (RL % 2 === 0) {
    oneMoreRL = false;
}


    for (let i = 0; i < RLamount; i++) {
      let nextRowVar = Math.min(startValueRowA, startValueRowB, startValueRowC);
      if (!isStackedA) {
        showBoxes.push(
          <ShowRL 
            x={sideRight}
            y={stacked}
            z={startValueRowA-sizeRL}
          /> 
        );
          isStackedA = true
      } else if (!isStackedB) {
        showBoxes.push(
          <ShowRL 
            x={sideMiddle}
            y={stacked}
            z={startValueRowB-sizeRL}
          />
        );  
          isStackedB = true
      } else if (!isStackedC) {
        showBoxes.push(
          <ShowRL 
            x={sideLeft}
            y={stacked}
            z={startValueRowC-sizeRL}
          /> 
        );  
          isStackedC = true
      } else {
        if (nextRowVar === startValueRowA) {
          showBoxes.push(
            <ShowRL 
              x={sideRight}
              y={ground}
              z={startValueRowA}
            /> 
          );
            startValueRowA += sizeRL 
            isStackedA = false
        } else if (nextRowVar === startValueRowB) {
          showBoxes.push(
            <ShowRL 
              x={sideMiddle}
              y={ground}
              z={startValueRowB}
            /> 
          ); 
            startValueRowB += sizeRL 
            isStackedB = false
        } else if (nextRowVar === startValueRowC) {
          showBoxes.push(
            <ShowRL 
              x={sideLeft}
              y={ground}
              z={startValueRowC}
            /> 
          ); 
            startValueRowC += sizeRL 
            isStackedC = false
        }
      }
    }
    startValueRowA += -18
    startValueRowB += -18
    startValueRowC += -18
    isStackedA = true
    isStackedB = true
    isStackedC = true
    for (let i = 0; i < LK; i++) {
      let nextRowVar = Math.min(startValueRowA, startValueRowB, startValueRowC);
      if (!isStackedA) {
        showBoxes.push(
          <ShowLK 
            x={sideRight}
            y={stacked}
            z={startValueRowA-sizeLK}
          /> 
        );
          isStackedA = true
      } else if (!isStackedB) {
        showBoxes.push(
          <ShowLK 
            x={sideMiddle}
            y={stacked}
            z={startValueRowB-sizeLK}
          />
        );  
          isStackedB = true
      } else if (!isStackedC) {
        showBoxes.push(
          <ShowLK 
            x={sideLeft}
            y={stacked}
            z={startValueRowC-sizeLK}
          /> 
        );  
          isStackedC = true
      } else {
        if (nextRowVar === startValueRowA) {
          showBoxes.push(
            <ShowLK 
              x={sideRight}
              y={ground}
              z={startValueRowA}
            /> 
          );
            startValueRowA += sizeLK 
            isStackedA = false
      } else if (nextRowVar === startValueRowB) {
          showBoxes.push(
            <ShowLK 
              x={sideMiddle}
              y={ground}
              z={startValueRowB}
            /> 
          ); 
            startValueRowB += sizeLK 
            isStackedB = false
      } else if (nextRowVar === startValueRowC) {
          showBoxes.push(
            <ShowLK 
              x={sideLeft}
              y={ground}
              z={startValueRowC}
            /> 
          ); 
            startValueRowC += sizeLK 
            isStackedC = false
      }
    }
  }
    startValueRowA -= -18
    startValueRowB -= -18
    startValueRowC -= -18
    if (oneMoreRL) {
      // do something else if oneMoreRL is set to true eg. place one more
      let nextRowVar = Math.min(startValueRowA, startValueRowB, startValueRowC);
         isStackedC = true
        if (nextRowVar === startValueRowA) {
          showBoxes.push(
            <ShowRL 
              x={sideRight}
              y={ground}
              z={startValueRowA}
            /> 
          );
            startValueRowA += sizeRL 
            isStackedA = false
        } else if (nextRowVar === startValueRowB) {
          showBoxes.push(
            <ShowRL 
              x={sideMiddle}
              y={ground}
              z={startValueRowB}
            /> 
          ); 
            startValueRowB += sizeRL 
            isStackedB = false
        } else if (nextRowVar === startValueRowC) {
          showBoxes.push(
            <ShowRL 
              x={sideLeft}
              y={ground}
              z={startValueRowC}
            /> 
          ); 
            startValueRowC += sizeRL 
            isStackedC = false
        }
      }
    
 

  return (
    <>
      {showBoxes}
    </>
  )
}

export default Boxes