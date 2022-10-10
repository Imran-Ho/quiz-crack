import React from 'react';

const Course = ({course}) => {
    const {name}= course;
    return (
        <div>
            <h1>course: {name}</h1>
        </div>
    );
};

export default Course;