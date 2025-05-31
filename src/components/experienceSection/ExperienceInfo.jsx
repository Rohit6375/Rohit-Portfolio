import React from 'react'

const ExperienceInfo = ({number,text}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='font-body text-6xl text-cyan '>{number}</p>
        <p className='font-body text-xl text-lightGrey uppercase -mt-4'>{text}</p>

    </div>
  )
}

export default ExperienceInfo