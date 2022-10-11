import React from 'react';

const QTypes = ({question}) => {
    console.log(question)
    return (
        <div>
            <h2>Q Type: {question.length}</h2>
        </div>
    );
};

export default QTypes;