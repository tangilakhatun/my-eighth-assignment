import React, { useEffect, useState } from 'react';
import Header  from '../Component/Header';
import Footer from '../Component/Footer'
import { Outlet,  useNavigation } from 'react-router';
import logoImg from '../assets/logo.png'
const MainLayout = () => {
     const navigation =useNavigation()
      const [showLoader, setShowLoader] =useState(false);

      useEffect(() => {
    if (navigation.state === "loading") {
      setShowLoader(true);
    } else {
      const timer = setTimeout(() => setShowLoader(false), 500);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);
    return (
        <>
            <Header></Header>
           
            {showLoader ? (
        <div className="flex items-center text-7xl font-bold justify-center min-h-[60vh]">L <span > <img className='w-16 h-16 animate-spin' src={logoImg} alt="" /> </span> oding
          
        </div>
      ) : (
        <Outlet />
      )}

            
            
            <Footer></Footer>
        </>
    );
};

export default MainLayout;