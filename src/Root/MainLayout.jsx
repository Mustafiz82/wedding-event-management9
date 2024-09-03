import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Header/Nav';
import Footer from '../Component/Footer/Footer';


const MainLayout = () => {
    return (
        <div className='mx-auto 2xl:text-xl'>
            <div className=' '><Nav ></Nav></div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;