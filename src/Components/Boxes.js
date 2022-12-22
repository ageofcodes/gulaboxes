import React from 'react'
import ShowLK from "./ShowLK";
import ShowRL from "./ShowRL";
import ShowKärl from "./ShowKärl";
import ShowPallLyft from "./ShowPallLyft";

const Boxes = ({LK, RL, Kärl, PallLyft}) => {
  const sideRight = (-27)
  const sideMiddle = (-9)
  const sideLeft = (9)
  const forwardStart = (-36)
  const ground = (0)
  const stacked = (16.83)
  const sizeLK = (27)
  const sizeRL = (45)
  const sizeKärl = (27)
  let startValueRowA = forwardStart
  let startValueRowB = forwardStart
  let startValueRowC = forwardStart
  let isStackedA = true
  let isStackedB = true
  let isStackedC = true

  const showBoxes = [];
  
    startValueRowA += -18
    startValueRowB += -18
    startValueRowC += -18




  let oneMoreRL = false;
  let RLAmount = RL
  if (RL % 2 === 1) {
    oneMoreRL = true;
    RLAmount -= 1
} else if (RL % 2 === 0) {
    oneMoreRL = false;
}
let oneMoreLK = false;
let LKAmount = LK
if (LK % 2 === 1) {
  oneMoreLK = true;
  LKAmount -= 1
} else if (LK % 2 === 0) {
  oneMoreLK = false;
}
startValueRowA += 18
startValueRowB += 18
startValueRowC += 18

    for (let i = 0; i < RLAmount; i++) {
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
    for (let i = 0; i < LKAmount; i++) {
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
      
    startValueRowA += -18
    startValueRowB += -18
    startValueRowC += -18
    isStackedA = true
    isStackedB = true
    isStackedC = true
    if (oneMoreLK) {
        let nextRowVar = Math.min(startValueRowA, startValueRowB, startValueRowC);
        isStackedC = true
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


 
  let KäRLAmount = Kärl
  let nextRowVar = Math.min(startValueRowA, startValueRowB, startValueRowC);
  let LastKärl = false
  let SecLastKärl = false
  let startValueRowBOccuped = false;
  for (let i = 0; i < KäRLAmount; i++) {
    if (i === KäRLAmount-1) {LastKärl = true;}
    else {LastKärl = false;}
    if (i === KäRLAmount-2) {SecLastKärl = true;}
    else {SecLastKärl = false;}

     nextRowVar = Math.min(startValueRowA, startValueRowB, startValueRowC);

    if (LastKärl === true && SecLastKärl === false && (nextRowVar === startValueRowB) && (startValueRowB === startValueRowC)){
    showBoxes.push(
      <ShowKärl 
      x={sideRight+27}
      y={ground}
      z={startValueRowB}
      isRotated={true}
      /> 
    );
    startValueRowBOccuped = true;
    startValueRowC += 18 
    } else if (LastKärl === true && SecLastKärl === false && (nextRowVar === startValueRowB) && (startValueRowB === startValueRowA)){
    showBoxes.push(
      <ShowKärl 
      x={sideRight}
      y={ground}
      z={startValueRowB}
      isRotated={true}
      /> 
    );
    startValueRowBOccuped = true;
    startValueRowA += 18 
}  else if (LastKärl === true && SecLastKärl === false && (nextRowVar === startValueRowB) && (startValueRowB === startValueRowC)){
  showBoxes.push(
    <ShowKärl 
    x={sideLeft}
    y={ground}
    z={startValueRowB}
    isRotated={true}
    /> 
  );
  startValueRowBOccuped = true;
  startValueRowC += 18 
} else if (LastKärl === false && SecLastKärl === true && (nextRowVar === startValueRowB ) && (startValueRowB === startValueRowA) && (startValueRowA === startValueRowC)){
  showBoxes.push(
    <ShowKärl 
    x={sideRight}
    y={ground}
    z={startValueRowB}
    isRotated={true}
    /> 
  );
  startValueRowBOccuped = true;
  startValueRowA += sizeKärl 
  } else if (LastKärl === false && SecLastKärl === true && (nextRowVar === startValueRowB ) && (startValueRowB === startValueRowA) && (startValueRowA === startValueRowC)){
  showBoxes.push(
    <ShowKärl 
    x={sideRight}
    y={ground}
    z={startValueRowB}
    isRotated={true}
    /> 
  );
  startValueRowBOccuped = true;
  startValueRowA += sizeKärl 
} else if (LastKärl === false && SecLastKärl === true && (nextRowVar === startValueRowB ) && (startValueRowB === startValueRowC) && (startValueRowA === startValueRowC)){
  showBoxes.push(
    <ShowKärl 
    x={sideRight+27}
    y={ground}
    z={startValueRowB}
    isRotated={true}
    /> 
  );
  startValueRowBOccuped = true;
  startValueRowA += sizeKärl 
 // basic på sista
}  else if ((LastKärl === true && SecLastKärl === false)  && nextRowVar === startValueRowA) {
  showBoxes.push(
    <ShowKärl 
      x={sideRight}
      y={ground}
      z={startValueRowA}
    /> 
  );
  startValueRowA += sizeKärl  
} else if ((LastKärl === true && SecLastKärl === false)  && nextRowVar === startValueRowB) {
  showBoxes.push(
    <ShowKärl 
      x={sideMiddle}
      y={ground}
      z={startValueRowB}
    /> 
  ); 
  startValueRowB += sizeKärl
} else if ((LastKärl === true && SecLastKärl === false)  && nextRowVar === startValueRowC) {
  showBoxes.push(
    <ShowKärl 
      x={sideLeft}
      y={ground}
      z={startValueRowC}
    /> 
  ); 
  startValueRowC += sizeKärl 
// basic på näst sista 
}  else if ((LastKärl === false && SecLastKärl === true)  && nextRowVar === startValueRowA) {
  showBoxes.push(
    <ShowKärl 
      x={sideRight}
      y={ground}
      z={startValueRowA}
    /> 
  );
  startValueRowA += sizeKärl
} else if ((LastKärl === false && SecLastKärl === true)  && nextRowVar === startValueRowB) {
  showBoxes.push(
    <ShowKärl 
      x={sideMiddle}
      y={ground}
      z={startValueRowB}
    /> 
  ); 
  startValueRowB += sizeKärl
} else if ((LastKärl === false && SecLastKärl === true)  && nextRowVar === startValueRowC) {
  showBoxes.push(
    <ShowKärl 
      x={sideLeft}
      y={ground}
      z={startValueRowC}
    /> 
  ); 
  startValueRowC += sizeKärl 
// basic efter här:
}  else if ((LastKärl === false && SecLastKärl === false)  && nextRowVar === startValueRowA) {
      showBoxes.push(
        <ShowKärl 
          x={sideRight}
          y={ground}
          z={startValueRowA}
        /> 
      );
      startValueRowA += sizeKärl
    } else if ((LastKärl === false && SecLastKärl === false)  && nextRowVar === startValueRowB) {
      showBoxes.push(
        <ShowKärl 
          x={sideMiddle}
          y={ground}
          z={startValueRowB}
        /> 
      ); 
      startValueRowB += sizeKärl
    } else if ((LastKärl === false && SecLastKärl === false)  && nextRowVar === startValueRowC) {
      showBoxes.push(
        <ShowKärl 
          x={sideLeft}
          y={ground}
          z={startValueRowC}
        /> 
      ); 
      startValueRowC += sizeKärl 
    }
}
if (startValueRowBOccuped){
  startValueRowB += sizeKärl
  startValueRowBOccuped = false
}


// Här lägger vi in pallLyft

nextRowVar = Math.min(startValueRowA, startValueRowB, startValueRowC);

if (PallLyft === true && nextRowVar < -30) {

  showBoxes.push(
    <ShowPallLyft 
      x={sideLeft}
      y={ground}
      z={-42}
    /> 
  );
}

 else if (PallLyft === true && nextRowVar === startValueRowA) {
showBoxes.push(
  <ShowPallLyft 
    x={sideRight}
    y={ground}
    z={startValueRowA-15}
  /> 
);
// startValueRowA += sizeKärl
} else if (PallLyft === true && nextRowVar === startValueRowB) {
showBoxes.push(
  <ShowPallLyft 
    x={sideMiddle}
    y={ground}
    z={startValueRowB-15}
  /> 
); 
//  startValueRowB += sizeKärl
} else if (PallLyft === true && nextRowVar === startValueRowC) {
showBoxes.push(
  <ShowPallLyft 
    x={sideLeft}
    y={ground}
    z={startValueRowC-15}
  /> 
); 
//startValueRowC += sizeKärl 
}
//slut pallLyft







  return (
    <>
      {showBoxes}

        </>
  )
}

export default Boxes