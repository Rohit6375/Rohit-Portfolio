import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from 'react-scroll';
const links=[
    {link:"About Me", section:"about"},
    {link:"Skills", section:"skills"},
    {link:"Experience", section:"experience"},
    {link:"Projects", section:"projects"},
    {link:"Contact", section:"contact"},
];
const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'><Link to="contact" smooth={true} 
                 spy={true} duration={500} offset={-130}>
  Hire Me
</Link>

    <div className='sm:hidden md:block'> <LuArrowDownRight /></div>
       
    </button>
  )
}

export default NavbarBtn;