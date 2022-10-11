import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Question from './components/Question/Question';
import Quizs from './components/Quizs/Quizs';
import Statistics from './components/Quizs/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', element:<Main></Main>, children: [
      {path: '/',
      loader: ()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element: <Quizs></Quizs>},

      {path:'/course/:courseID',
      loader: async ({params}) => {
        // console.log(params.courseID)
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseID}`)
      },
       element: <Question></Question>},

      {path: '/statistics', element: <Statistics></Statistics>},
      {path: '/blog', element: <Blog></Blog>},
    ]},
    {path: '/*', element: <p className='text-center text-3xl'>This page was not found: 404</p>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
