import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id,name,logo, total}= course;
    return (
        <div className='flex p-3 bg-slate-200 my-3 rounded-xl'>
                <div className='   bg-slate-500 my-3' >
                    <img className='p-3 h-44' src={logo} alt="" />
                </div>
                <div className=''>
                    <div className='mb-3 p-3'>
                        <h1 className='text-2xl py-3'>{name}</h1>
                        <p>Quiz: {total}</p>
                    </div>
                    <div className='mt-6 pl-3'>
                        <Link to={`/course/${id}`}>
                        <button className='text-lg text-white bg-indigo-600 hover:bg-violet-800 p-2 rounded-md'><p>Start Quiz</p></button>
                        </Link>
                    </div>
                </div>
        
        </div>
    );
};

export default Course;