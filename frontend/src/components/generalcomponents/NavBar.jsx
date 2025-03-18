import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs';
import logo from '../../assets/images/finarium.png'
import logo2 from '../../assets/images/finarium2.png'
import { navIcons } from '../../utils/pageUtilis';
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";


const NavBar = () => {
  const [menuOptions, setMenuOptions] = useState(false);
  const [bgcolor, setBgColor] = useState(null);
  const menuRef = useRef(null);
  const menuItemsRef = useRef(null);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 500) {
        setBgColor('white');
      } else if (scrollPosition >= 150) {
        setBgColor('orange');
      } else {
        setBgColor(null);
      }
    };


    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation for opening the menu
  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOptions) {
      // Reset the menu visibility
      menuRef.current.style.display = 'block';

      // Animate the menu container sliding in from top
      anime({
        targets: menuRef.current,
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo'
      });

      anime({
        targets: menuItemsRef.current.children,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(80, { start: 300 }),
        easing: 'easeOutQuad'
      });
    } else if (menuRef.current.style.display === 'block') {
      anime({
        targets: menuRef.current,
        translateY: ['0%', '-100%'],
        opacity: [1, 0],
        duration: 600,
        easing: 'easeInExpo',
        complete: () => {
          menuRef.current.style.display = 'none';
        }
      });
    }
  }, [menuOptions]);

  const navigate = useNavigate()


  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const elementId = path.replace('/#', ''); 
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      navigate(path);
    }
  };
  return (
    <div className="relative lg:pt-5 w-full z-50">
      {/* Menu Dropdown  */}
      <div
        ref={menuRef}
        className="w-full h-fit pt-5 pb-20 fixed z-50 overflow-hidden bg-[#f6f6f6] px-2"
        style={{ display: 'none', transform: 'translateY(-100%)' }}
      >
        <div className="mt-5 w-11/12 mx-auto h-full flex items-center flex-col gap-10">
          <div className="flex items-center w-full justify-between">
            <div className="">
              <img src={logo2} className='lg:w-fit cursor-pointer  w-[250px]' alt="finarium logo" />
            </div>
            <div onClick={() => setMenuOptions(false)} className="cursor-pointer">
              <IoMdClose className="text-4xl md:text-5xl" />
            </div>
          </div>

          <div className="w-full h-fit gap-5 flex flex-col items-center justify-center bg-white rounded-md py-10">
            <div ref={menuItemsRef} className="flex flex-col items-center gap-5">
              {navIcons.map((item, i) => (
                <div key={i} 
                onClick={() => handleNavClick(item.path)}
                className="cursor-pointer text-[16px]">{item.name}</div>
              ))}

              <div className="flex flex-col items-center gap-3 mt-2">
                <button className='cursor-pointer'>Login</button>
                <button className='py-2.5 cursor-pointer px-6 rounded-full bg-[#4B4B4B] text-white'>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className={`flex w-full lg:px-10 fixed top-0 py-6 mx-auto lg:justify-between justify-between px-3 md:px-10 items-center transition-colors text-[var(--color-dark)] duration-300 ${bgcolor === 'orange' ? 'bg-[#d56600] ' : bgcolor === 'white' ? 'bg-white' : ''}`}>
        <div onClick={() => navigate('/')} className="transition-opacity duration-300">
          <img src={bgcolor === 'orange' || bgcolor === null ? logo : logo2} className='lg:w-fit cursor-pointer w-[250px]' alt="finarium logo" />
        </div>
        <div className="lg:hidden">
          <CgMenu
            onClick={() => setMenuOptions(true)}
            className={`${bgcolor ? 'text-black' : 'text-white'} text-4xl md:text-5xl transition-colors duration-300`} />
        </div>
        <div className="lg:flex hidden items-center gap-5">
          {navIcons.map((item, i) => (
            <div key={i}
            onClick={() => handleNavClick(item.path)}
            className="cursor-pointer">{item.name}</div>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <button className='cursor-pointer'>Login</button>
          <button className='py-2.5 cursor-pointer px-6 rounded-full bg-[#4B4B4B] text-white'>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;