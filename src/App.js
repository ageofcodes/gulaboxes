import "./App.css";
import ShowLK from "./Components/ShowLK";
import ShowRL from "./Components/ShowRL";
import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <div style={{ height: "100vh", backgroundColor: "#E9F1F7" }}>
        <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
          <pointLight position={[10, 10, 10]} intensity={1.3} />
          <Suspense fallback={null}>
            <ShowLK />
            <ShowRL />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
