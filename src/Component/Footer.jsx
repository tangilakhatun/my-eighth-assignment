import React from 'react';
import logoImg from '../assets/logo.png'
import xImg from '../assets/x.png'
import inImg from '../assets/rx.png'
import facImg from '../assets/f.png'

const Footer = () => {
    return (
        <div className='bg-[#001931]  text-neutral-content p-10 mt-10' >
        <footer className=" footer md:footer-horizontal max-w-[1400px] mx-auto">
                <nav>
                    <div className='flex gap-2 justify-center items-center '>
                        <img  className='h-[40px] w-[40px] mx-auto' src={logoImg} alt="" />
 <h6 className="font-medium text-[20px] text-white ">HERO.IO</h6>
                    </div>
                    
                    <p className="link link-hover text-[#A1A1AA] ">Apps are useful programs that help us <br /> in many ways every day. We use them for <br /> learnin ,   chatting, shopping, and entertainment. <br /> They make our lives easier and more enjoyable.</p>
                </nav>
  <nav>
    <h6 className="font-medium text-[20px] text-white">Information</h6>
    <a className="link link-hover text-[#A1A1AA]">Privacy Policy</a>
    <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
    <a className="link link-hover text-[#A1A1AA]">Join Us</a>
  </nav>
  <nav>
    <h6 className="font-medium text-[20px] text-white">Services</h6>
    <a className="link link-hover text-[#A1A1AA]">Apps & Services</a>
    <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
    <a className="link link-hover text-[#A1A1AA]">Download Apps</a>

  </nav>
  <nav >
    <h6 className="font-medium text-[20px] text-white">Social Links</h6>
    <div className='flex gap-2'>
<a className="link link-hover text-[#A1A1AA]"> <div className='flex gap-2'> <img src={xImg} alt="" /> </div></a>
    <a className="link link-hover text-[#A1A1AA]"> <div className='flex gap-2'> <img src={inImg} alt="" /> </div></a>
    <a className="link link-hover text-[#A1A1AA] "> <div className='flex gap-2 '><img src={facImg} alt="" /></div></a>
    </div>
    
    
  </nav>
  </footer>
<hr className='border-b-0.1 border-gray-700 mt-[80px]  mx-auto max-w-[1400px]' />
<h3 className='text-center mb-[30px] mt-[30px] text-[#FAFAFA]'>Copyright © 2025 - All right reserved</h3>
        </div>
    );
};

export default Footer;