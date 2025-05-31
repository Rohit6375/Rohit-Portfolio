import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='w-full fixed left-0 z-20 mt-2'>
      <div className='max-w-[1300px] mx-auto px-4'>
        <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange overflow-hidden'>

          <NavbarLogo />

          <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
            <NavbarLinks />
          </div>

          <div className='flex items-center gap-2'>
            <NavbarBtn />

            {/* Hamburger inside the same flex container */}
            <div className='lg:hidden sm:block'>
              <button
                className='text-2xl p-3 border border-orange rounded-full text-white'
                onClick={toggleMenu}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
