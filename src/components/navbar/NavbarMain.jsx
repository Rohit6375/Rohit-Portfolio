import React from 'react'
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const NavbarMain = () => {
    const[menuOpen,setMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }
  return (
   <nav className='w-full fixed left-1/2 transform -translate-x-1/2 z-20 flex gap-4 mt-2 px-4'>
  <div className='flex justify-between w-full max-w-screen-xl mx-auto bg-black items-center p-6 rounded-full border-[0.5px] border-orange'>

         <NavbarLogo/>
            <div className={`${menuOpen? "sm:block " : "sm:hidden"}    lg:block` }>  
                <NavbarLinks/>
            </div>
      
        <NavbarBtn/>
        </div>
        <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5x] border-orange'>
            <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={toggleMenu}><GiHamburgerMenu /></button>
            
        </div> 
    </nav>
  )
}

export default NavbarMain;