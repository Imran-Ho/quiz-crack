import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Quizs = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div  className='mx-6'>
            <h2>Quizsjhgfdjhjf</h2>
           <div className='grid grid-cols-4 gap-3'>
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