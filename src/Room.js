import React, { useState } from "react"
import { useGLTF } from "@react-three/drei"

export default function Room() {
  const gltf = useGLTF("../public/room/room.glb")
  const [modelGeometry, setModelGeometry] = useState()

  if (!modelGeometry) {
    const modelScene = gltf.scene.clone(true)
    setModelGeometry(modelScene)
  }

  return (
    <>
      <mesh receiveShadow scale={[1, 1, 1]} position={[8, 0, 10]}>
        <primitive object={modelGeometry} dispose={null} />
      </mesh>
    </>
  )
}
