import React from 'react';
import logo from '../../assets/images/finarium.png'
import { navIcons } from '../../utils/pageUtilis';


const NavBar = () => {
  return (
    <div className="relative z-10  w-full ">
      <div className="flex w-full items-center justify-between">
        <div className="">
          <img src={logo} className='' alt="finarium logo" />
        </div>
        <div className="flex items-center gap-5">
          {navIcons.map((item, i) => (
            <div key={i} className="cursor-pointer">{item.name}</div>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <button className='cursor-pointer'>Login</button>
          <button className='py-2.5 cursor-pointer px-6 rounded-full bg-[#4B4B4B] text-white'>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;