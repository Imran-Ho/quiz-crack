import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import img from '../Home/home.png'

const Quizs = () => {
    const courses = useLoaderData()
    // console.log(courses)

    
    return (
        <div  className='m-6'>
            <div className='md:flex justify-start content-center'>
                <img className='my-3 rounded-lg' src={img} alt="" />
                <h1 className='text-5xl m-10 text-emerald-400' >Skill Development with Funny Manner.</h1>
            </div>
           <div className='md:grid grid-cols-4 gap-6'>
                    {
                        courses.data.map(course => <Course
                        key={course.id}
                        course={course}
                        ></Course>)
                    }
           </div>

        </div>
    );
};

export default Quizs;