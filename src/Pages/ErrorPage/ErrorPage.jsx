import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-screen h-screen  flex justify-center items-center'>
           <div className='text-center '>
           <h1 className='flex items-center justify-center text-9xl'>
                4 <AiOutlineHeart className='text-pink'></AiOutlineHeart> 4   
            </h1>
            <h2 className='text-7xl font-courgette'>Page Not Found</h2>

            <Link to="/"><button className='btn mt-5 bg-pink '>Home</button></Link>
           </div>

        </div>
    );
};

export default ErrorPage;