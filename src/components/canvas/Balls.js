
import { Float, OrbitControls, Preload, useTexture, Decal } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber';

const Balls = ({imgUrl}) => {

    const [decal] = useTexture([imgUrl])

  return (
    <Float>
        <ambientLight intensity={0.25}></ambientLight>
        <directionalLight position={[0, 0, 0.05]}></directionalLight>
        <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1, 1]}></icosahedronGeometry>
            <meshStandardMaterial color="#fff" polygonOffset polygonOffsetFactor={-5} flatShading></meshStandardMaterial>
            <Decal position={[0, 0, 1]} map={decal} scale={1.1} rotation={[2*Math.PI, 0, 6.25]}></Decal>
        </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
    return (
        <Canvas frameloop='demand'
        dpr={[1, 2]}
        gl={{preserveDrawingBuffer:true}}
        >
            <Suspense>
                <OrbitControls enableZoom={false}></OrbitControls>
                <Balls imgUrl={icon}></Balls>
            </Suspense>
            <Preload all></Preload>
        </Canvas>
    );
}

export default BallCanvas