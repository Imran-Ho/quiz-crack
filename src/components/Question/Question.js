import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QTypes from '../QTypes/QTypes';

const Question = () => {
    const questions = useLoaderData();
    // console.log(questions.data)
    return (
        <div>
            <h2 className='text-2xl text-center p-3 shadow-lg my-3 rounded-lg '>Question of : {questions.data.name}</h2>
            <div className='my-3 p-6'>
                {
                    questions.data.questions.map(question => <QTypes
                    key={question.id}
                    question={question}
                    ></QTypes>)
                }
            </div>
        </div>
    );
};

export default Question;