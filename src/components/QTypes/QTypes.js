import React from 'react';

const QTypes = ({question}) => {
    // console.log(question)
    const items = [];
    for(const options of question.options){
        // console.log(options)
        // items.push(<li>{options}</li>)
    items.push(<li><input type="radio" value="" name=""/>{options}</li>)
    }
    return (
        <div className='my-3 mx-10 border-solid border-2 border-indigo-600 '>
            <h2>Q Type: {question.question}</h2>
            <ul>{items}</ul>
            
            
        </div>
    );
};

export default QTypes;