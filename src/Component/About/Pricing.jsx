import React, { useEffect, useState } from 'react';
import Price from './Price';

const Pricing = () => {

    const [loader , setLoader] = useState([])

    useEffect(() => {
        fetch('pricing.json')
        .then(res => res.json())
        .then(data => setLoader(data))
    },[])
    return (
        <div className='my-20'>
            <h1  className='text-7xl font-courgette font-bold text-center'> Our <span className='text-pink'>Pricing plan</span></h1>
            <div className='grid  md:grid-cols-3 gap-5 lg:grid-cols-3 mt-10 place-content-center' > 
            {
                loader.map(item => <Price item={item}></Price>)
            }
        </div>
        </div>
    );
};

export default Pricing;