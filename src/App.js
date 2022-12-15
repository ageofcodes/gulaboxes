import "./App.css";
import React, { Suspense } from "react";
import {  OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MenyButtons from "./Components/MenyButtons";
import Boxes from "./Components/Boxes";
import Lights from "./Components/Lights";
import Truck from "./Components/Truck";
import { useState } from "react";

function App() {
  const [LK, setLK] = useState(0);
  const nameLK = "LK";
  const [RL, setRL] = useState(0);
  const nameRL = "RL";

  return (
    <div className="App">
      <div style={{ height: "100vh", backgroundColor: "#E9F1F7" }}>
        <MenyButtons 
        LK={LK}
        setLK={setLK}
        nameLK={nameLK}
        RL={RL}
        setRL={setRL}
        nameRL={nameRL}
        />
        <Canvas camera={{ position: [100, 400, 200], fov: 50 }}>    
          <Lights />
          <Suspense fallback={null}>
            <Boxes
            LK={LK}
            RL={RL}
            />
            <Truck />
            <OrbitControls  />
          </Suspense>
        <gridHelper  args={[270, 30, "blue", "hotpink"]} />
        </Canvas>
      </div>

    </div>
  );
}

export default App;
