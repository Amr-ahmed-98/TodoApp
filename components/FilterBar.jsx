'use client';
import { todoAction } from '@Store/todo-slice';
import { clearCompletedTodos } from '@pages/api/todo-api';
import { useDispatch, useSelector } from 'react-redux';

function FilterBar() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const theme = useSelector((state) => state.todoReducer.theme);

  const handleClearCompleted = async () => {
    await clearCompletedTodos(todos);
    dispatch(todoAction.clearCompleted({ id: todos.id }));
  };

  return (
    <div>
      <div
        className={`fixed rounded-b-md wid-form h-10 bottom-28   ${
          theme === 'night'
            ? 'bg-gradient-to-r from-red-200 via-red-300 to-yellow-200'
            : 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'
        }  max-md:w-96`}
      >
        <div className=' text-white font-bold flex justify-between  '>
          <div>
            <p className='text-white font-bold pt-2 pl-5 flex sm:text-sm'>
              {todos.length} items <span className='sm:hidden'> left</span>
            </p>
          </div>
          <div className='flex gap-3 py-2  sm:text-sm '>
            <p
              className='cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
              onClick={() => dispatch(todoAction.showAll())}
            >
              All
            </p>
            <p
              className='cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '
              onClick={() => dispatch(todoAction.showActive())}
            >
              Active
            </p>
            <p
              className='cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
              onClick={() => dispatch(todoAction.showCompleted())}
            >
              Completed
            </p>
          </div>
          <div className='pr-2 py-2 cursor-pointer sm:text-sm '>
            <p
              className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
              onClick={() => {
                dispatch(handleClearCompleted);
              }}
            >
              Clear Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
