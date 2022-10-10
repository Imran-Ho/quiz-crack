import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Quizs = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            <h2>Quizsjhgfdjhjf</h2>
            {
                courses.data.map(course => <Course
                key={course.id}
                course={course}
                ></Course>)
            }

        </div>
    );
};

export default Quizs;