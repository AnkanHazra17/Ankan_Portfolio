
import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
    contentStyle={{background:"#1d1836", color:"#fff"}}
    contentArrowStyle={{borderRight:"7px solid #232631"}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
        <div className='flex items-center justify-center w-full h-full'>
            <img src={experience.icon} alt='' className='w-[60%] h-[60%] object-contain'></img>
        </div>
    }
    >
        <div>
            <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
        </div>

        <ul className='mt-5 list-disc space-y-2 ml-2'>
            {
                experience.points.map((point, index) =>(
                    <li key={index} className='t text-secondary text-[14px]'>{point}</li>
                ))
            }
        </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard