import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between content-center bg-slate-400 py-3 pl-6'>
            <div>
                <h1 className='text-4xl'>Know-Thyself</h1>
            </div>
            <div>
                <Link to='/' className='text-2xl'>Quizs</Link>
                <Link to='statistics' className='text-2xl mx-5'>Statistics</Link>
                <Link to='blog' className='text-2xl pr-6'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;