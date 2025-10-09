import React from 'react';
import ErrorImg from '../assets/error-404.png'
import { Link } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const ErrorPage = () => {
    return ( 
        
        
        <div>
            <Header></Header>
            <div className='max-w-[1400px] mx-auto flex flex-col justify-center h-screen items-center'>
            <img className=' flex justify-center items-center mx-auto' src={ErrorImg} alt="" />
            <h1 className='text-[#001931] text-[48px] font-bold text-center'>Oops, page not found!</h1>
            <p className='text-[#627382] text-[20px] text-center mt-6' >The page you are looking for is not available.</p>
             <div className='max-w-[1400px] flex justify-center mx-auto mt-20'>
                <Link to='/'>
                <button className='bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white font-semibold px-[30px]
         py-[12px] rounded-sm'> Go Back Home Page!</button>
                </Link>
 
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;