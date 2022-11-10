import React from "react";
import { useGLTF } from "@react-three/drei";

function ShowLK() {
  const { scene } = useGLTF("LK.glb");
  return <primitive object={scene} />;
}

export default ShowLK;
