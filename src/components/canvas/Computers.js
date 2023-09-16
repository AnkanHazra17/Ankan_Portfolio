
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from 'react-three-fiber';


const Computers = ({isMobile}) => {

    const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
        <hemisphereLight intensity={3} groundColor="black"></hemisphereLight>
        <pointLight intensity={1.2}></pointLight>
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1.3} castShadow></spotLight>
        <primitive object={computer.scene} scale={isMobile ? 0.55 : 0.75} position={isMobile ? [0, -3, -1.7] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}></primitive>
    </mesh>
  )
}

const ComputerCanvas = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect( () =>{
        const mediaquary = window.matchMedia("(max-width: 566px)");
        setIsMobile(mediaquary.matches);

        const handleMediaQuaryChange = (event) => {
            setIsMobile(event.matches);
        }

        mediaquary.addEventListener("change", handleMediaQuaryChange);

        return () =>{
            mediaquary.removeEventListener("change", handleMediaQuaryChange);
        }; 
    },[])

    return (
        <Canvas
        frameloop='demand'
        shadows
        camera={{position: [20, 3, 5], fov:25}}
        gl={{preserveDrawingBuffer:true}}
        className='md:block hidden'
        >
            <Suspense>
                <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
                ></OrbitControls>

                <Computers isMobile={isMobile}></Computers>
            </Suspense>

            <Preload all></Preload>
        </Canvas>
    )
}

export default ComputerCanvas