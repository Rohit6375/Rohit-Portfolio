import React from 'react'
import { Link } from 'react-scroll';
const links=[
    {link:"About Me", section:"about"},
    {link:"Skills", section:"skills"},
    {link:"Experience", section:"experience"},
    {link:"Projects", section:"projects"},
    {link:"Contact", section:"contact"},
];
const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>I'm a Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React, Tailwind CSS, and SQL. A graduate of NIT Jalandhar, I enjoy building responsive and visually engaging web applications. I've solved 300+ problems on platforms like LeetCode and GeeksforGeeks, sharpening my coding logic and problem-solving ability. Alongside web development, I’m proficient in C++ and have a solid grasp of computer science fundamentals like DBMS and OOPs. My project experience and internships have helped me blend creativity with performance, and I'm always excited to turn ideas into smooth, user-friendly interfaces.</p>
        <div className='flex justify-between flex-wrap gap-4'>
          <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'> <Link to='projects' smooth={true} 
                 spy={true} duration={500} offset={-130} >My Projects</Link>  </button>

                  <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'> <a href='https://drive.google.com/file/d/1077d5jqGqUxLcakPJdmd3Phw5Bm_YemY/view' >Resume</a>  </button>
        </div>
        
    </div>
  )
}

export default AboutMeText