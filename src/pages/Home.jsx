import React from 'react';
import playstorImg from "../assets/play stor.png"
import appImg from '../assets/app.png'

const Home = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>We Build <br /> <span className='text-[#632EE3]'>Productive</span>Apps</h1>
            <p className='text-[#627382] text-[20px] mt-6 text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
<div className='flex justify-center gap-4 mt-10'>
    <div className='flex btn '>
        <img className='' src={playstorImg} alt="" />
<button className='text-[20px] font-semibold'> Google Play</button>
    </div>
    <div className='flex btn'>
        <img src={appImg} alt="" />
<button className='text-[20px] font-semibold'>App Store </button>
    </div>
 
           
</div>
          
        </div>
    );
};

export default Home;