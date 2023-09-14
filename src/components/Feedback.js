
import React from 'react'
import { motion } from 'framer-motion'
import SectionWraper from '../hoc/SectionWraper'
import Testimonials from './Testimonials'
import { testimonials } from '../contents/Content'
import { textVariant } from '../utils/Motion'

const Feedback = () => {
  return (
    <div className='mt-20 w-full'>
      <div className='w-11/12 max-w-[1200px] mx-auto'>
        <motion.div variants={textVariant()}>
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>What others say</p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Testimonials.</h2>
        </motion.div>

        <Testimonials testimonials={testimonials}></Testimonials>
      </div>
    </div>
  )
}

export default SectionWraper(Feedback, "")