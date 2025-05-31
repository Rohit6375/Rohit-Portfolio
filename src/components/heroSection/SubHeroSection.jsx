import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-3xl md:text-xl sm:text-lg py-6 items-center gap-4 bg-brown'>
        <p className='md:block sm:hidden'>Fast Learner</p>
        <p className='md:block sm:hidden'>Team Work</p>
        <p>Details Master</p>
    </div>
  )
}

export default SubHeroSection