import { useGLTF } from "@react-three/drei";

function ShowKärl({ x, y, z, isRotated }) {
  const { scene } = useGLTF("Kärl.glb");
  let rotation=false;
  if (isRotated){
  (rotation=(Math.PI / 2))
  x += 27.8
  z += -9
    }   

  return (
    <primitive 
      object={scene.clone()} 
      position={[x, y, z]} 
      rotation={[0, rotation, 0]}

      scale={[0.61, 0.57, 0.558]} />
  );
}

export default ShowKärl;