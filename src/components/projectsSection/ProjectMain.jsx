import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';
const projects=[
    {
        name:"Food Delivery Web App",
        align:"right",
        year:"2025",
        image:"/images/website-img-1.jpg",
        link:"https://github.com/Rohit6375/react-food-delivery-app",
    },
    {
        name:"Chrome Extension",
        align:"left",
        year:"2025",
        image:"/images/website-img-2.webp",
        link:"https://github.com/Rohit6375/Chrome_Extension",
    },
    {
        name:"School Website",
        align:"right",
        year:"2025",
        image:"/images/website-img-3.jpg",
        link:"https://github.com/Rohit6375/School_Website",
    }
];

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div
        variants={fadeIn('up',0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once:false,amount:0}}
        ><ProjectText/></motion.div>
        
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto
        mt-12'>
            {projects.map((item,index)=>{
                return <SingleProject key={index} name={item.name} align={item.align} image={item.image} link={item.link} year={item.year}/>
            })}
        </div>
    </div>
  )
}

export default ProjectMain