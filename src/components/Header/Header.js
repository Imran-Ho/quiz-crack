import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-around content-center bg-slate-400 py-3 drop-shadow-lg'>
            <div>
                <h1 className='text-3xl font-semibold text-green-300'>Know-Thyself</h1>
            </div>
            <div className=''>
                <Link to='/' className='text-lg text-white font-semibold '>Home</Link>
                <Link to='statistics' className='text-lg text-white font-semibold  mx-5'>Statistics</Link>
                <Link to='blog' className='text-lg text-white font-semibold '>Blog</Link>
            </div>
        </div>
    );
};

export default Header;