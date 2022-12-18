import React from 'react'

const Truck = () => {

  return (
    <mesh position={[0, -0.5, 0]}>
      <boxGeometry  
        attach="geometry" 
        args={[54, 1, 162]} />
      <meshBasicMaterial 
        color="#4D516D"  />
    </mesh>
  )
}

export default Truck