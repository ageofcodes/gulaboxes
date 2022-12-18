import React from 'react'
import ShowLK from "./ShowLK";
import ShowRL from "./ShowRL";


/* 
Om LK eller RL ändras ska alla tas bort och allt börjas om. 

Kolla LK och RL om det är udda
Gör en loop som delar ut LK 2 och 2 (stacked) till dess att dom är ute.
En rad A en B och en C. Välj A eller den som är kortast.
Därefter skjut upp A, B eller C variabeln till ny startpunkt.
Gör sedan samma med RL.
Därefter placera ut dom 2 udda om det finns.


*/

/*
  let checkStackA = isStackedA
  let checkStackB = isStackedB
  let checkStackC = isStackedC
*/
const Boxes = ({LK, setLK, RL, setRL}) => {
  const sideRight = (-27)
  const sideMiddle = (-9)
  const sideLeft = (9)
  const forwardStart = (-36)
  const ground = (0)
  const stacked = (16.83)
  const restLK = (LK%2)
  const restRL = (RL%2)
  const sizeLK = (27)
  const sizeRL = (45)

  let startValueRowA = forwardStart
  let startValueRowB = forwardStart
  let startValueRowC = forwardStart

  let isStackedA = true
  let isStackedB = true
  let isStackedC = true

  const showBoxes = [];
    for (let i = 0; i < RL; i++) {
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

  return (
    <>
    {showBoxes}
    </>
  )
}

export default Boxes