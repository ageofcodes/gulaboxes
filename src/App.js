import "./App.css";
import React, { Suspense } from "react";
import {  OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MenyButtons from "./Components/MenyButtons";
import Boxes from "./Components/Boxes";
import Lights from "./Components/Lights";
import Truck from "./Components/Truck";

function App() {

  return (
    <div className="App">
      <div style={{ height: "100vh", backgroundColor: "#E9F1F7" }}>
        <MenyButtons />
        <Canvas camera={{ position: [100, 400, 200], fov: 50 }}>    
          <Lights />
          <Suspense fallback={null}>
            <Boxes />
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
