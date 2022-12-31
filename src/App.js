import "./App.css";
import React, { Suspense, useState } from "react";
import {  OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MenyButtons from "./Components/MenyButtons";
import Boxes from "./Components/Boxes";
import Lights from "./Components/Lights";
import Truck from "./Components/Truck";



function App() {
  const [LK, setLK] = useState(0);
  const nameLK = "LK";
  const [RL, setRL] = useState(0);
  const nameRL = "RL";
  const [Kärl, setKärl] = useState(0);
  const nameKärl = "Kärl";
  const [PallLyft, setPallLyft] = useState(true)
  const namePallLyft = "PallLyft";



  return (
    <div className="App">
      <div style={{ height: "100vh", backgroundColor: "#ffffff" }}>
        <MenyButtons 
          LK={LK}
          setLK={setLK}
          nameLK={nameLK}
          RL={RL}
          setRL={setRL}
          nameRL={nameRL}
          Kärl={Kärl}
          setKärl={setKärl}
          nameKärl={nameKärl}
          PallLyft={PallLyft}
          setPallLyft={setPallLyft}
          namePallLyft={namePallLyft}/>
       <Canvas camera={{ position: [30, 50, 120], fov: 75 }}>    
           <Lights />
          <Suspense fallback={null}>
          <Boxes
            LK={LK}
            setLK={setLK}
            RL={RL}
            setRL={setRL} 
            Kärl={Kärl}
            setKärl={setKärl} 
            PallLyft={PallLyft}
/>
          <Truck />
          <OrbitControls
          minDistance={50} 
          maxDistance={800} 
          />
        </Suspense>
        {<gridHelper  args={[270, 50, "blue", "hotpink"]} />}
       </Canvas>
      </div>
    </div>
  );
}

export default App;
