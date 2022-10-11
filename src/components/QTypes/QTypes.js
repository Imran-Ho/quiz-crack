import React from 'react';
import {EyeIcon } from '@heroicons/react/24/solid'
import swal from 'sweetalert';

const QTypes = ({question}) => {
    console.log(question)
    const items = [];

    // quiz option selection condition.
    const seletedCorrectOne =(opt)=>{
        console.log(opt)

            if(opt === question.correctAnswer){
                alert('This one is correct answer')
            }
            else{alert('you selected wrong answer ')}
        }
    

    //clickHandler for sweet alert.
    const correctHandler = (quest)=>{
        // console.log(quest.correctAnswer)
        swal("The Correct Answer is:", quest.correctAnswer);
    } 

    for(const options of question.options){
        console.log(options)
        // items.push(<li>{options}</li>)
    items.push(<button onClick={()=>seletedCorrectOne(options)} className='bg-slate-500 p-3 hover:bg-violet-600 text-white rounded-lg'>{options}</button>)
    }
    return (
       <div className='mx-20'>
            <div className='my-3 border-solid border-2  p-3'>
                <div className='flex justify-between bg-sky-500/50 mb-3 p-3 rounded-lg'>
                    <h2 className='text-2xl pr-3'>Quiz: {question.question}</h2>
                    <EyeIcon onClick={()=>correctHandler(question)} className='w-5 h-10'></EyeIcon>
                </div>
                <div className=' grid grid-cols-2 gap-3' >{items}</div>
            </div>
       </div>
    );
};

export default QTypes;