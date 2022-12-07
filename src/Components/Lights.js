import React from 'react'


const Lights = () => {
  return (<>
    <ambientLight intensity={0.4} />
    <directionalLight
        intensity={2}
        color="white"
        position={[0, 2, 4]}
    /></>

  )
}

export default Lights