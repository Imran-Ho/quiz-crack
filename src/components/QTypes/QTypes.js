import React from 'react';
import {EyeIcon } from '@heroicons/react/24/solid'
import swal from 'sweetalert';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QTypes = ({question}) => {
    const items = [];

    // quiz option selection condition.
    const seletedCorrectOne =(opt)=>{
            if(opt === question.correctAnswer){
                alert('This one is correct answer')
                // toast.success('wow')
                
            }
            else{alert('you selected wrong answer ')}
        }
    

    //clickHandler for sweet alert.
    const correctHandler = (quest)=>{
        swal("The Correct Answer is:", quest.correctAnswer);
    } 

    for(const options of question.options){
    items.push(<button onClick={()=>seletedCorrectOne(options)} className='bg-slate-500 p-3 hover:bg-violet-600 text-white rounded-lg'>{options}</button>)
    }

    return (
       <div className='md:mx-20'>
            <div className='my-3 border-solid border-2  p-3'>
                <div className='md:flex justify-between bg-sky-500/50 mb-3 p-3 rounded-lg'>
                    <h2 className='text-lg pr-3'>Quiz: {question.question}</h2>
                    <EyeIcon onClick={()=>correctHandler(question)} className='w-10 h-10'></EyeIcon>
                </div>
                <div className=' grid md:grid-cols-2 sm:grid-cols-1 gap-3' >{items}</div>
            </div>
       </div>
    );
};

export default QTypes;