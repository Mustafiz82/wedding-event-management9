import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const loader = useLoaderData()
    const {id} = useParams()
    // console.log(params);

     const item = loader.find(item => item.id == id)
     
     const {title , long_description,image} = item

    return (
        <div className='space-y-5'>
            <div><img src={image} alt="" className='max-h-[600px] w-full object-cover' /></div>
            <h1 className='text-5xl font-semibold   '>{title}</h1>
            <p className='text-xl text-justify'>{long_description}</p>
        </div>
    );
};

export default ServiceDetail;