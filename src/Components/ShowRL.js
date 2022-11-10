import React from "react";
import { useGLTF } from "@react-three/drei";

function ShowRL() {
  const { scene } = useGLTF("RL.glb");
  return <primitive object={scene} />;
}

export default ShowRL;
