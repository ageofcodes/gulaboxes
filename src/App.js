import "./App.css";
import ShowLK from "./Components/ShowLK";
import ShowRL from "./Components/ShowRL";
import React, { Suspense } from "react";
import { useGLTF, OrbitControls,Instance, Instances } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ButtonLK from "./Components/ButtonLK";
import ButtonRL from "./Components/ButtonRL";
import { useState } from "react";
import Submit from "./Components/Submit";

function App() {

  const [LK, setLK] = useState(0);
  const nameLK = "LK";
  const [RK, setRK] = useState(0);
  const nameRL = "RL";

  return (
    <div className="App">
      <div style={{ height: "100vh", backgroundColor: "#E9F1F7" }}>

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
      <Submit /></div>
      

     
      <Canvas camera={{ position: [100, 400, 200], fov: 50 }}>    
      

            <ambientLight intensity={0.4} />
            <directionalLight
                intensity={2}
                color="white"
                position={[0, 2, 4]}
            />
    <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="hotpink" transparent />
    </mesh>



            <Suspense fallback={null}>
            <ShowRL />
            <ShowLK />
            <OrbitControls  />
          </Suspense>
        <gridHelper  args={[270, 18, "blue", "hotpink"]} />
        </Canvas>
      </div>

    </div>
  );
}

export default App;
