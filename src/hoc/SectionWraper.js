
import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/Motion';

const SectionWraper = (Component, idName) => function HOC (){
    return (
        <motion.section variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.25}}
        >
            <span id={idName} className='hash-span'>&nbsp;</span>
            <Component></Component>
        </motion.section>
    );
}

export default SectionWraper