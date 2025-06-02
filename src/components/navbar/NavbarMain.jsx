import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full fixed z-20 left-0 top-0 px-2 sm:px-4 mt-2 bg-black">
      <div className="flex items-center justify-between border-[0.5px] border-orange rounded-full px-4 py-3 max-w-[95%] sm:max-w-[70%] lg:max-w-[1200px] mx-auto overflow-hidden">
        
        <NavbarLogo />

        {/* Toggle menu visibility: visible block on mobile if open, always block on sm+ */}
        <div className={`${menuOpen ? "block" : "hidden"} sm:block lg:block`}>
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-2">
          <NavbarBtn />

          {/* Hamburger visible only below sm breakpoint */}
          <div className="sm:hidden">
    <button
      className="text-2xl p-2 border border-orange rounded-full text-white"
      onClick={toggleMenu}
      aria-label="Toggle menu"
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
