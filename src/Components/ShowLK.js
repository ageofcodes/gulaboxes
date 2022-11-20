import React from "react";
import { useGLTF } from "@react-three/drei";

function ShowLK() {
  const { scene } = useGLTF("LKGLB.glb");
  return <primitive object={scene} position={[0 , 0, 0]} scale={[0.57, 0.57, 0.57]} />;
}

export default ShowLK;
