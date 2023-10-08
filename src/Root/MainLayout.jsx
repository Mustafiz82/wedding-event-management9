import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Header/Nav';
import Footer from '../Component/Footer/Footer';


import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className=' '><Nav ></Nav></div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;