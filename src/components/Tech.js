import React from 'react'
import { motion } from 'framer-motion'
import SectionWraper from '../hoc/SectionWraper'
import { textVariant } from '../utils/Motion'
import { technologies } from '../contents/Content'
import BallCanvas from './canvas/Balls'
import { css, docker, figma, git, html, javascript, mongodb, nodejs, reactjs, redux, tailwind, threejs, typescript } from '../assets'



const Tech = () => {
  return (
    <div className='w-full mt-20'>
      <div className='w-11/12 max-w[1200px] mx-auto'>
        <motion.div variants={textVariant()}>
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Technologies that I know</p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>My Techstack.</h2>
        </motion.div>

        <div className='md:flex gap-10 flex-wrap justify-center mt-4 hidden'>
          {
            technologies.map((technology) =>(
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon}></BallCanvas>
              </div>
            ))
          }
        </div>

        <div className='flex md:hidden flex-wrap'>
          <img src={html} alt=''></img>
          <img src={css} alt=''></img>
          <img src={javascript} alt=''></img>
          <img src={typescript} alt=''></img>
          <img src={reactjs} alt=''></img>
          <img src={redux} alt=''></img>
          <img src={tailwind} alt=''></img>
          <img src={nodejs} alt=''></img>
          <img src={mongodb} alt=''></img>
          <img src={threejs} alt=''></img>
          <img src={git} alt=''></img>
          <img src={figma} alt=''></img>
          <img src={docker} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default SectionWraper(Tech, "")