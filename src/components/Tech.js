import React from 'react'
import { motion } from 'framer-motion'
import SectionWraper from '../hoc/SectionWraper'
import { textVariant } from '../utils/Motion'
import { technologies } from '../contents/Content'
import BallCanvas from './canvas/Balls'

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

        <div className='flex md:hidden flex-wrap gap-4 justify-center mt-4'>
          {
            technologies.map((technology) => (
              <div className='w-16 h-16 rounded-full bg-slate-600 p-2 flex items-center justify-center' key={technology.name}>
                <img src={technology.icon} alt=''></img>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SectionWraper(Tech, "")