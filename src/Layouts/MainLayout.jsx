import React from 'react';
import Header  from '../Component/Header';
import Footer from '../Component/Footer'
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <div className='max-w-[1400px] mx-auto mt-20'>
<Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </>
    );
};

export default MainLayout;