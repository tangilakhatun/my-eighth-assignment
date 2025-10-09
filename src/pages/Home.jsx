import React from 'react';
import playstorImg from "../assets/play stor.png";
import appImg from '../assets/app.png';
import heroImg from '../assets/hero.png';
import { Link, useLoaderData } from 'react-router';
import Appcard from '../Component/AppCard';

const Home = () => {
    const apps =useLoaderData()||[];
    const eightApps =apps.slice(0,8);
    console.log(eightApps)
    return (
        <section className=''>
        <div className='max-w-[1400px] mx-auto mt-20'>
            <h1 className='text-5xl font-bold text-center text-[#001931] '>We Build <br /> <span className='text-[#632EE3]'>Productive</span>Apps</h1>
            <p className='text-[#627382] text-[20px] mt-6 text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
<div className='flex justify-center gap-4 mt-10 flex-col sm:flex-row'>
    <div className='flex btn '>
        <img className='' src={playstorImg} alt="" />
        <a href="https://play.google.com/store/games?hl=en"><button className='text-[20px] font-semibold'> Google Play</button></a>

    </div>
    <div className='flex btn'>
        <img src={appImg} alt="" />
        <a href="https://www.apple.com/app-store/"><button className='text-[20px] font-semibold'>App Store </button></a>

    </div>
</div>
          <div className='mt-10 '>
            <img className='flex justify-center items-center text-center mx-auto' src={heroImg} alt="" />
           </div>
        </div>

        <section className='bg-linear-to-b from-[#632EE3] to-[#9F62F2]'>
            <h1 className='text-[48px] font-bold text-white text-center pt-[80px]'>Trusted by Millions, Built for You</h1>
            <div className='flex sm:flex-row flex-col justify-center gap-20 p-[80px]'>
                <div className='text-center'>
                    <p className='text-white'>Total Downloads</p>
                    <h1 className='text-[64px] font-extrabold text-white'>29.6M</h1>
                    <p className='text-white'>21% more than last month</p>

                </div>
                 <div>
                    <p className='text-white'>Total Reviews</p>
                    <h1 className='text-[64px] font-extrabold text-white'>906K</h1>
                    <p className='text-white'>46% more than last month</p>

                </div>
                 <div>
                    <p className='text-white'>Active Apps</p>
                    <h1 className='text-[64px] font-extrabold text-white'>132+</h1>
                    <p className='text-white'>31 more will Launch</p>

                </div>
            </div>
        </section>
        <section className='max-w-[1400px] mx-auto mt-[80px] text-center'>
            <h1 className='text-[#001931] text-[48px] font-bold'>Trending Apps</h1>
            <p className='text-[#627382] text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
        </section>

        <section className='max-w-[1400px] mx-auto mt-12'>
            <div className='grid items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-3 gap-3'>
                {
                    eightApps.map(app =><Appcard key={app.id} app={app}></Appcard>)
                }

            </div>

        </section>
        <Link to='/apps'>
        <div className='max-w-[1400px] flex justify-center mx-auto mt-20 '>
 <button className='bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white font-semibold px-[30px]
         py-[12px] rounded-sm'>Show All</button>
        </div>
        </Link>
        
       
</section>


          
    );
};

export default Home;