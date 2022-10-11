import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QTypes from '../QTypes/QTypes';

const Question = () => {
    const questions = useLoaderData();
    console.log(questions)
    return (
        <div>
            <h2>this is question:</h2>
            {/* {
                questions.data.map(question => <QTypes
                key={question.id}
                question={question}
                ></QTypes>)
            } */}
        </div>
    );
};

export default Question;