import React from "react";
import { useGLTF } from "@react-three/drei";

function ShowRL() {
  const { scene } = useGLTF("RLGLB.glb");
  return <primitive object={scene} position={[9 , 0, 81]} scale={[0.57, 0.57, 0.57]}/>;
}

export default ShowRL;
