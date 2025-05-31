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
      <div className="mx-auto w-[90%] sm:w-[80%] lg:max-w-[1200px] flex justify-between items-center px-4 py-3 bg-black border border-orange rounded-full">
        
        {/* Logo */}
        <NavbarLogo />

        {/* Links */}
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
