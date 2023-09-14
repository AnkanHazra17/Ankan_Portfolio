import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import { motion } from 'framer-motion'


const TestimonialCard = ({testimonial}) => {
  return (
    <motion.div className='w-full py-5'>
        <div className='w-[70%] mx-auto bg-black p-4 rounded-2xl'>
            <div className='flex flex-wrap gap-10 items-center'>
                <img src={testimonial.image} alt='' className='w-[100px] h-[100px] rounded-full'></img>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[24px] font-bold leading[30px]'>{testimonial.name}</p>
                    <p className='text-secondary text-sm'>{testimonial.designation}, {testimonial.company}</p>
                </div>
            </div>
            
            <div className='flex flex-col items-center gap-6 mt-6 mb-4'>
                <FaQuoteLeft></FaQuoteLeft>
                <p className='max-w-[500px]'>{testimonial.testimonial}</p>
                <FaQuoteRight></FaQuoteRight>
            </div>
        </div>

    </motion.div>
  )
}

export default TestimonialCard