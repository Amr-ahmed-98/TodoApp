'use client';
import { todoAction } from '@Store/todo-slice';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteTodo } from '@pages/api/todo-api';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = ({ id, text }) => {
  const [isHover, setIsHover] = useState(false);

  const active = useSelector((state) =>
    state.todoReducer.todos.find((todo) => todo.id === id)
  )?.active;
  const theme = useSelector((state) => state.todoReducer.theme);
  const dispatch = useDispatch();
  const iconCompleted = active ? faCircle : faCircleCheck;
  return (
    <li
      key={id}
      className={`w-full min-h-12 relative mt-7 ${
        theme === 'night'
          ? 'bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 cursor-pointer'
          : 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'
      } `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        dispatch(todoAction.isActive({ id: id }));
      }}
    >
      <div
        className='flex items-center my-5 mx-5 py-2 text-lg font-mono'
        onClick={(e) => {
          e.stopPropagation();
          dispatch(todoAction.isActive({ id: id }));
        }}
      >
        <FontAwesomeIcon
          icon={iconCompleted}
          className={`w-7 h-7 pr-3 ${
            theme === 'morning'
              ? 'text-white'
              : 'text-slate-700 pr-4 hover:text-orange-300'
          }  cursor-pointer`}
          style={!active ? { opacity: 0.4 } : {}}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(todoAction.isActive({ id }));
          }}
        />

        <p
          className={`cursor-pointer text-2xl sm:text-lg ${
            theme === 'morning' ? 'text-white' : 'text-slate-500'
          }  hover:font-bold`}
          style={
            !active ? { textDecoration: 'line-through', opacity: 0.4 } : {}
          }
          onClick={() => dispatch(todoAction.isActive({ id: id }))}
        >
          {text}
        </p>
        {isHover && (
          <FontAwesomeIcon
            icon={faTrash}
            className={`absolute right-5 h-7 w-7 cursor-pointer ${
              theme === 'morning' ? 'text-white' : 'hover:text-orange-300'
            } `}
            onClick={() => {
              dispatch(todoAction.removeTodo({ id: id }));
              deleteTodo(id);
            }}
          />
        )}
      </div>
    </li>
  );
};

export default TodoList;
