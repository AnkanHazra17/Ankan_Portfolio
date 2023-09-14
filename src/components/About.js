
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/Motion"
import { services } from '../contents/Content';
import ServiceCard from './ServiceCard';
import SectionWraper from '../hoc/SectionWraper';


const About = () => {
  return (
    <div className='w-full'>
      <div className='w-11/12 max-w-[1200px] mx-auto'>
        <motion.div variants={textVariant()}>
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview.</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I'm a skilled software developer with experience in HTML, CSS and
          JavaScript, and expertise in frameworks like Tailwind css, React js, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
      </div>

      <div className='w-full'>
        <div className='mt-20 flex flex-wrap gap-10 w-11/12 max-w-[1200px] mx-auto justify-evenly'>
          {
            services.map((service, index) => (
              <ServiceCard key={service.title} index={index} service={service}></ServiceCard>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default SectionWraper(About, "about")