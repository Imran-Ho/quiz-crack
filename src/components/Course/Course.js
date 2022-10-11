import React from 'react';

const Course = ({course}) => {
    const {name,logo}= course;
    return (
        <div className='w-50 p-3 bg-slate-200'>
                <div className='   bg-slate-500' >
                    <img className='p-3' src={logo} alt="" />
                </div>
                <div className='flex justify-between p-3'>
                    <h1 className='text-2xl'>{name}</h1>
                    <button className='text-2xl bg-lime-600 p-2 rounded-md'><p>Start Quiz</p></button>
                </div>
        
        </div>
    );
};

export default Course;