import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
   <nav className="w-full fixed top-0 z-20 px-2 sm:px-4 mt-2">
  <div className="w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[1200px] mx-auto bg-black border border-orange rounded-full flex items-center justify-between px-4 py-3">
    
    {/* Left: Logo */}
    <NavbarLogo />

    {/* Middle: Links */}
    <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
      <NavbarLinks />
    </div>

    {/* Right: Hire Me + Hamburger */}
    <div className="flex items-center gap-2">
      <NavbarBtn />
      <div className="lg:hidden sm:block">
        <button className="text-2xl p-2 border border-orange rounded-full text-white" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavbarMain;
