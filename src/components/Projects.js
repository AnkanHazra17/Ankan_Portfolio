import React from 'react'
import { motion } from 'framer-motion'
import SectionWraper from '../hoc/SectionWraper'
import { fadeIn, textVariant } from '../utils/Motion'
import { projects } from '../contents/Content'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='w-full mt-20'>
        <div className='w-11/12 max-w-[1200px] mx-auto'>
            <motion.div variants={textVariant()}>
                <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>My projects</p>
                <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Projects.</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
            </motion.p>

            <div className='mt-20 flex justify-evenly flex-wrap gap-4'>
                {
                    projects.map((project, index) => (
                        <ProjectCard key={`project${index}`} index={index} project={project}></ProjectCard>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default SectionWraper(Projects, "projects")