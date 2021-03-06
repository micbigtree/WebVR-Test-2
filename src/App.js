import React from "react"
import { Canvas } from "react-three-fiber"
import { Sky, PointerLockControls } from "@react-three/drei"
import { Physics } from "use-cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cube, Cubes } from "./Cube"
import Room from "./Room"

export default function App() {
  return (
    <Canvas shadowMap gl={{ alpha: false }} camera={{ fov: 35 }}>
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
        <Cube position={[0, 7, -10]} />
        <Room />
      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}
