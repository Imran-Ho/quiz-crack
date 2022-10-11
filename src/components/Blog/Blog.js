import React from 'react';

const Blog = () => {
    return (
        <div className='p-6'>
            
            
            <div className='border-solid border-2 border-indigo-600 my-6 p-3 rounded-lg'>
                <h1 className='text-3xl p-3 underline underline-offset-4'>What is the purpose of React Router? </h1>
                <p className='text-2xl'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='border-solid border-2 border-indigo-600 p-3 rounded-lg'>
                <h1 className='text-3xl p-3 underline underline-offset-4'>How does Context API work? </h1>
                <p className='text-2xl'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border-solid border-2 border-indigo-600 my-6 p-3 rounded-lg'>
                <h1 className='text-3xl p-3 underline underline-offset-4'>Define useRef? </h1>
                <p className='text-2xl'>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;