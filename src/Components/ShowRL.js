import React from "react";
import { useGLTF } from "@react-three/drei";

function ShowRL({x, y, z}) {
  const { scene } = useGLTF("RLGLB.glb");
  return (
    <primitive 
      object={scene.clone()} 
      position={[x, y, z]} 
      scale={[0.57, 0.57, 0.57]} />
  );
}

export default ShowRL;
