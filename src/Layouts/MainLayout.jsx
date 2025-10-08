import React from 'react';
import Header  from '../Component/Header';
import Footer from '../Component/Footer'
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <div className=''>
<Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </>
    );
};

export default MainLayout;