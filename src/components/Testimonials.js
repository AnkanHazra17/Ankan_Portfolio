import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'
import{FaChevronLeft, FaChevronRight} from "react-icons/fa"
import { motion } from 'framer-motion'
import { slideIn } from '../utils/Motion'


const Testimonials = ({testimonials}) => {
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndex(testimonials.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function rightShiftHandler(){
        if(index + 1 > testimonials.length - 1){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

  return (
    <motion.div className='mt-12 bg-black-100 rounded-md' variants={slideIn("left", "tween", 0.2, 1)}>
        <TestimonialCard testimonial={testimonials[index]}></TestimonialCard>

        <div className='w-full mt-8 flex items-center justify-center'>
            <section className='flex gap-10 mb-8'>
                <button onClick={leftShiftHandler} className='py-2 px-5 bg-white text-black rounded-md'><FaChevronLeft></FaChevronLeft></button>
                <button onClick={rightShiftHandler} className='py-2 px-5 bg-white text-black rounded-md'><FaChevronRight></FaChevronRight></button>
            </section>
        </div>
    </motion.div>
  )
}

export default Testimonials