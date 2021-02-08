import * as THREE from "three"
import React, { useCallback } from "react"
import { useLoader } from "react-three-fiber"
import { useBox } from "use-cannon"
import { useState } from "react"
import create from "zustand"
import Room from "./Room"

const useCubeStore = create((set) => ({
  cubes: [],
  addCube: (x, y, z) => set((state) => ({ cubes: [...state.cubes, [x, y, z]] })),
}))

export const Cubes = () => {
  const cubes = useCubeStore((state) => state.cubes)
  return cubes.map((coords, index) => <Cube key={index} position={coords} />)
}

export const Cube = (props) => {
  const [ref] = useBox(() => ({ type: "Static", ...props }))
  const [hover, set] = useState(null)
  const onMove = useCallback((e) => (e.stopPropagation(), set(Math.floor(e.faceIndex / 2))), [])
  const onOut = useCallback(() => set(null), [])
  const onClick = useCallback((e) => {}, [])
  return (
    <mesh ref={ref} receiveShadow castShadow onPointerMove={onMove} onPointerOut={onOut} onClick={onClick}>
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial attachArray="material" key={index} color={hover === index ? "hotpink" : "white"} />
      ))}
      <boxBufferGeometry />
    </mesh>
  )
}
