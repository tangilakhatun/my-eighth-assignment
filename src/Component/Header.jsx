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
        <NavLink end className={({isActive}) => isActive ? 'text-[#632EE3] border-b-2 border-[#632EE3] pb-1 text-[20px] font-bold' : 'text-[20px] font-bold'} to='/'> Home</NavLink> 
      <NavLink to='/apps'  className={({isActive}) => isActive ? 'text-[#632EE3] border-b-2 border-[#632EE3] pb-1 text-[20px] font-bold' : 'text-[20px] font-bold'}> Apps</NavLink> 
      <NavLink to='/installation'  className={({isActive}) => isActive ? 'text-[#632EE3] border-b-2 border-[#632EE3] pb-1 text-[20px] font-bold' : 'text-[20px] font-bold'}> Installation</NavLink> 
      </ul>
    </div>
    <div className='flex justify-center items-center'>
      <img className='h-[25px] w-[25px] sm:h-[40px] sm:w-[40px]' src={logoImg} alt="" />
<a className="btn btn-ghost text-sm md:text-base lg:text-lg  font-bold text-[#632EE3]">HERO.IO</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
       <NavLink end className={({isActive}) => isActive ? 'text-[#632EE3] border-b-2 border-[#632EE3] text-[20px] font-bold mr-3 pb-1' : 'text-[20px] font-bold mr-3'} to='/'> Home</NavLink> 
      <NavLink to='/apps'  className={({isActive}) => isActive ? 'text-[#632EE3] border-b-2 border-[#632EE3] text-[20px] font-bold pb-1 mr-3' : 'text-[20px] font-bold mr-3'}> Apps</NavLink> 
      <NavLink to='/installation'  className={({isActive}) => isActive ? 'text-[#632EE3] border-b-2 border-[#632EE3] text-[20px] font-bold mr-2 pb-1' : 'text-[20px] mr-2 font-bold'}> Installation</NavLink> 
    </ul>
  </div>
  <div className="navbar-end">
   
 <a href='https://github.com/tangilakhatun' className="btn p-2 text-sm md:text-base lg:text-lg bg-linear-to-b from-[#632EE3] to-[#9F62F2] 
  text-white font-semibold transform transition duration-300  hover:scale-105"> <Github /> Contribute</a>
   
  </div>
</div>
        </div>
    );
};

export default Header;