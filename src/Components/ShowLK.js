import { useGLTF } from "@react-three/drei";

function ShowLK({ x, y, z }) {
  const { scene } = useGLTF("LKGLB.glb");
  return (
    <primitive 
      object={scene.clone()} 
      position={[x, y, z]} 
      scale={[0.57, 0.57, 0.57]} />
  );
}

export default ShowLK;