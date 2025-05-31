import React from 'react'
import { motion } from 'motion/react'
import { fadeIn } from '../../framerMotion/variants'
const SingleExperience = ({experience}) => {
  return (
    <motion.div
     variants={fadeIn('right',0.2)}
                              initial='hidden'
                              whileInView='show'
                              viewport={{once:false,amount:0.7}}
    className='md:h-[438px] md:w-[300px] sm:h-auto sm:w-auto border-2 border-orange border-dashed rounded-2xl  mt-12 p-4'>
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>
      {experience.heading && (
        <p className='text-sm text-white '>{experience.heading}</p>
      )}
      <ul className='list-disc  pl-2 text-white'>
        {experience.responsibilities.map((resp,index)=>{
          return <li key={index}>{resp}</li>
        })}
      </ul>
    </motion.div>
  )
}

export default SingleExperience;