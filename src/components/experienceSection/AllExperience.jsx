import React from 'react'
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'motion/react'
import { fadeIn } from '../../framerMotion/variants'
const experiences=[
    {
   job:"Front-End Developer (Summer) Intern",
   company:"GlickMet IT",
   date:"Jun 2023 - Aug 2023",
   responsibilities:['Built a responsive hospitality webspage using HTML, CSS, and Bootstrap, increasing engagement by 25%.','Added interactive UI features and improved branding consistency across pages.','Added interactive UI features and improved branding consistency across pages.','Optimized performance, reducing load time by 35% and server costs by 20%.']
   
},
    {
   job:"Full-Stack Developer Intern",
   company:"Unified Mentor Pvt ltd.",
   date:"Sep 2024 - Nov 2024",
   responsibilities:['Designed a Spotify-style music app using HTML, CSS, and JavaScript with real-time playback and curated playlists.','Optimized frontend logic for better performance, improving responsiveness by 25%.','Added a visual progress bar for enhanced audio navigation.','Built and optimized a personal portfolio site, reducing page load time by 40%.']
   
},
    {
   job:"Self-Learning",
   company:" Independent Projects",
   date:"Jan 2025 - Present",
   heading:"Acitvely looking for full time job opportunities.",
   responsibilities:['Built a responsive food delivery SPA using React.js and React Router, reducing page reloads by 90%.','Integrated Swiggy API for real-time restaurant data, increasing user engagement by 15%.','Designed 10+ reusable components with Tailwind CSS and adaptive UI.','Used React hooks (useState, useEffect, useContext, useRouteError) to manage state and improve UI stability.']
   
},
]
const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
        {experiences.map((experience,index)=>{
            return( 
            <>
            
            <SingleExperience key={index} experience={experience}/>
            {index<2? (
              <motion.div 
              variants={fadeIn('right',0.2)}
                          initial='hidden'
                          whileInView='show'
                          viewport={{once:false,amount:0.7}}
              >
                 <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>
              </motion.div>
             ):""}
            </>
            )
        })}
    </div>
  )
}

export default AllExperience