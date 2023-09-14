
import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import SectionWraper from '../hoc/SectionWraper';
import { textVariant } from '../utils/Motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../contents/Content';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <div className='w-full mt-20'>
      <div className='w-11/12 max-w-[1200px] mx-auto'>
        <motion.div variants={textVariant()}>
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>What I have learnt so far</p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Learning Timeline.</h2>
        </motion.div>

        <div className='mt-20'>
          <VerticalTimeline>
            {
              experiences.map((experience, index) =>(
                <ExperienceCard key={index} experience={experience}></ExperienceCard>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default SectionWraper(Experience, "")