
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/Motion';

const ServiceCard = ({service, index}) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-2xl shadow-card'>
            <div 
            options={{
                max:45,
                scale:1,
                speed:450
            }}
            className='bg-tertiary py-4 px-12 rounded-2xl min-h-[280px] flex flex-col items-center justify-evenly'
            >
                <img src={service.icon} alt='' className='w-16 h-16 object-contain'></img>
                <p className='text-white text-[20px] font-bold text-center'>{service.title}</p>
            </div>
        </motion.div>
    </Tilt>
  )
}

export default ServiceCard