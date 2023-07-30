import Image from 'next/image';
import Button from '@components/Button';
import Form from '@components/Form';
import FilterBar from '@components/FilterBar';
import TodoItem from '@components/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from '@Store/todo-slice';

export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.todoReducer.theme);
  return (
    <div
      className={`relative ${
        theme === 'morning' ? 'bg-night-bg' : 'bg-morning-bg'
      } w-screen h-screen bg-cover bg-center z-50`}
    >
      <div
        className={`absolute  ${
          theme === 'morning' ? 'night-gradient' : 'morning-gradient'
        } opacity-40 w-screen h-screen -z-50 `}
      />
      <div className='flex items-center justify-center w-screen h-screen'>
        <h2
          className={`${
            theme === 'morning' ? 'headNight-text' : 'head-text'
          }  xl:-translate-x-52 lg:-translate-x-44 md:-translate-x-44 sm:-translate-x-28`}
        >
          Todo List App
        </h2>
        <Button className='absolute top-28 xl:translate-x-56 lg:translate-x-56 md:translate-x-56 sm:translate-x-40 cursor-pointer'>
          {theme === 'morning' ? (
            <Image
              src='/assets/icons/icon-sun.svg'
              width={30}
              height={30}
              alt='sun icon'
              onClick={() => dispatch(todoAction.changeTheme())}
            />
          ) : (
            <Image
              src='/assets/icons/icon-moon.svg'
              width={30}
              height={30}
              alt='moon icon'
              onClick={() => dispatch(todoAction.changeTheme())}
            />
          )}
        </Button>
        <div className='relative mt-7 container-form bg-white rounded-lg shadow-2xl  max-md:w-96 max-md:h-96 overflow-scroll hide-scrollbar '>
          <Form />
          <TodoItem />
          <FilterBar />
        </div>
      </div>
    </div>
  );
}
