import React from 'react';
import banner from "../../assets/detailsbanner.jpg"

const DetailsBanner = () => {
    return (
        <div className='relative mb-6'>
            <img className=' h-48 w-full' src={banner} alt="banner" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-4xl text-primary font-bold'>Details</h1>
                </div>
        </div>
    );
};

export default DetailsBanner;