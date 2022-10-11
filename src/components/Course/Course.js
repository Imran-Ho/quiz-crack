import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id,name,logo, total}= course;
    return (
        <div className='w-50 p-3 bg-slate-200 my-3'>
                <div className='   bg-slate-500' >
                    <img className='p-3 h-44' src={logo} alt="" />
                </div>
                <div className='flex justify-between content-center p-3'>
                    <h1 className='text-2xl'>{name}</h1>
                    <p>Quiz: {total}</p>
                    <Link to={`/course/${id}`}>
                    <button className='text-1xl text-white bg-indigo-600 p-2 rounded-md'><p>Start Quiz</p></button>
                    </Link>
                </div>
        
        </div>
    );
};

export default Course;