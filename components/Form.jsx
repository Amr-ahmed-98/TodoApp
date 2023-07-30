'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from '@Store/todo-slice';
import { useState } from 'react';
const Form = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState('');
  const theme = useSelector((state) => state.todoReducer.theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoAction.addTodo({ id: Date.now(), text: tasks }));
    setTasks('');
  };

  return (
    <div className='relative '>
      <form
        className='fixed wid-form z-10 top-36 max-md:w-96 '
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='tasks'
          placeholder='type your task here ...'
          className={`h-12 w-full  pl-12 outline-none rounded-t-lg  text-white font-bold text-2xl ${
            theme === 'night'
              ? 'bg-gradient-to-r from-red-200 via-red-300 to-yellow-200'
              : 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'
          } `}
          onChange={(e) => setTasks(e.target.value)}
          value={tasks}
        />
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          className='w-8 h-8 text-white absolute top-2 right-2 cursor-pointer'
          onClick={() => {
            dispatch(todoAction.addTodo({ id: Date.now(), text: tasks }));
            setTasks('');
          }}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={`w-9 h-9 absolute top-2 left-1 ${
            theme === 'morning' ? 'text-white' : 'text-red-300'
          } `}
        />
      </form>
    </div>
  );
};

export default Form;
