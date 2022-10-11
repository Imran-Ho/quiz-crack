import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QTypes from '../QTypes/QTypes';

const Question = () => {
    const questions = useLoaderData();
    console.log(questions.data)
    return (
        <div>
            <h2>Question of : {questions.data.name}</h2>
            <div className='my-3 text-center'>
                {
                    questions.data.questions.map(question => <QTypes
                    question={question}
                    ></QTypes>)
                }
            </div>
        </div>
    );
};

export default Question;