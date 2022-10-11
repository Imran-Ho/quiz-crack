import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


const Statistics = () => {
    const courses = useLoaderData();
    const data = courses.data;
    // console.log(data)
    return (
        <div>

            <h1 className='text-2xl text-center my-6'>In the following Line Chart shows the total quiz of the courses.</h1>
            <div className='md:flex'>
            <div className='text-center'>
                <LineChart width={500} height={400} data={data}  margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5,
          }}>
                <XAxis dataKey="name" />
                <Line type="monotone" dataKey="total" stroke="#82ca9d"/>
                <YAxis />
                <Tooltip />
                </LineChart>
           </div>
           <div>
                <BarChart width={500} height={400} data={data}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name"/>
                
                </BarChart>
           </div>
            </div>
        </div>
    );
};

export default Statistics;