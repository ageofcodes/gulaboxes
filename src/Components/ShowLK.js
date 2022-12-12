import React from "react";
import { useGLTF } from "@react-three/drei";

function ShowLK() {
  const { scene } = useGLTF("LKGLB.glb");
  return <primitive object={scene} position={[-9 , 0, 81]} scale={[0.57, 0.57, 0.57]} />;
}

export default ShowLK;
