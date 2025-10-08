import React from 'react';
import logoImg from "../assets/logo.png"
import { Github } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';

const Header = () => {

  const navigate =useNavigate();
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-[1400px] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink className='text-[#632EE3]' to='/'> Home</NavLink> 
      <NavLink to='/apps'> Apps</NavLink> 
      <NavLink to='/installation'> Installation</NavLink> 
      </ul>
    </div>
    <div className='flex'>
      <img className='h-[40px] w-[40px]' src={logoImg} alt="" />
<a className="btn btn-ghost text-xl text-[#632EE3]">HERO.IO</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink className='text-[#632EE3] mr-3 font-semibold' to='/'> Home</NavLink> 
      <NavLink className='mr-3 font-semibold' to='/apps'> Apps</NavLink> 
      <NavLink className='mr-2 font-semibold' to='/installation'> Installation</NavLink> 
      
    </ul>
  </div>
  <div className="navbar-end">
   
 <a className="btn bg-linear-to-t from-[#632EE3] to-[#9F62F2] text-white font-semibold "> <Github /> Contribute</a>
   
  </div>
</div>
        </div>
    );
};

export default Header;