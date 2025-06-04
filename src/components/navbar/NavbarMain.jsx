import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full fixed z-20 left-0 top-0 px-2 sm:px-4 mt-2">
      <div className="flex items-center justify-between bg-black border-[0.5px] border-orange rounded-full px-4 py-3 max-w-[95%] sm:max-w-[70%] lg:max-w-[1200px] mx-auto overflow-hidden">
        
     
        <NavbarLogo />

    
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        {/* Hire Me Button + Hamburger grouped */}
        <div className="flex items-center gap-2">
          <NavbarBtn />
          
          {/* Hamburger - visible only on mobile */}
          <div className="lg:hidden sm:block">
            <button
              className="text-2xl p-2 border border-orange rounded-full text-white"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarMain;
