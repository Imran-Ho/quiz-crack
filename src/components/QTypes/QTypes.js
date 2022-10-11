import React from 'react';
import {EyeIcon } from '@heroicons/react/24/solid'
import swal from 'sweetalert';

const QTypes = ({question}) => {
    console.log(question)
    const items = [];

    //clickHandler for sweet alert.
    const correctHandler = (quest)=>{
        // console.log(quest.correctAnswer)
        swal("The Correct Answer is:", quest.correctAnswer);
    } 

    for(const options of question.options){
        // console.log(options)
        // items.push(<li>{options}</li>)
    items.push(<li><input type="radio" value="" name=""/>{options}</li>)
    }
    return (
       <div className='mx-20'>
            <div className='my-3 border-solid border-2 border-indigo-600 p-4'>
                <div className='flex justify-between'>
                    <h2 className=''>Q Type: {question.question}</h2>
                    <EyeIcon onClick={()=>correctHandler(question)} className='w-5 h-10'></EyeIcon>
                </div>
                <ul >{items}</ul>
            </div>
       </div>
    );
};

export default QTypes;