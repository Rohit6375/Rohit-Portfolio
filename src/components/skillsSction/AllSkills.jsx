import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import SingleSkill from './SingleSkill';
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';

const skills=[
    {
    skill:"HTML",
    icon:FaHtml5,   
},
    {
    skill:"CSS",
    icon:FaCss3Alt,   
},
    {
    skill:"JavaScript",
    icon:IoLogoJavascript ,   
},
    {
    skill:"ReactJS",
    icon:FaReact,   
},
    {
    skill:"Redux",
    icon:SiRedux,   
},
    {
    skill:"TailwindCSS",
    icon:RiTailwindCssFill,   
},
    {
    skill:"SQL",
    icon:TbSql,   
},
];
const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item,index)=>{
                return (
                <motion.div
                 variants={fadeIn('up',`0.${index}`)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once:false,amount:0}}
                >
                    
                      <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
                </motion.div>
            );
            })}
        </div>
    </div>
  )
}

export default AllSkills