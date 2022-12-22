import { useGLTF } from "@react-three/drei";

function ShowPallLyft({ x, y, z }) {
  const { scene } = useGLTF("PallLyft.glb");
  return (
    <primitive 
      object={scene.clone()} 
      position={[x, y, z]} 
      scale={[0.57, 0.57, 0.57]} />
  );
}

export default ShowPallLyft;