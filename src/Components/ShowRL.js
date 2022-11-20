import React from "react";
import { useGLTF } from "@react-three/drei";

function ShowRL() {
  const { scene } = useGLTF("RLGLB.glb");
  return <primitive object={scene} position={[-30.8 , 0, -57]} />;
}

export default ShowRL;
