import React from "react";
import { useGLTF } from "@react-three/drei";

function ShowLK() {
  const { scene } = useGLTF("LKGLB.glb");
  return <primitive object={scene} position={[-60.8 , 0, -88.5]} />;
}

export default ShowLK;
