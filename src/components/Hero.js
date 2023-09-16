
import React from 'react'
import { styles } from '../styles'
import ComputerCanvas from './canvas/Computers'

const Hero = () => {
    return (
        <section className='w-full h-screen -z-40'>
            <div className='w-11/12 max-w-[1200px] mx-auto relative flex flex-row'>
                <div className='absolute top-[100px] left-0 flex gap-4'>

                    <div className='flex flex-col items-center'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]'></div>
                        <div className='w-1 h-80 violet-gradient'></div>
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white-100`}>Hi, I'm <span className='text-[#915EFF]'>Ankan</span></h1>
                        <p className={`${styles.heroSubText} text-white mt-2`}>I develop 3D visuals, user interfaces and web applications</p>
                    </div>
                </div>
            </div>

            
            <ComputerCanvas></ComputerCanvas>
            
        </section>
    )
}

export default Hero