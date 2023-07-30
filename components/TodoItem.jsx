'use client';
import { todoAction } from '@Store/todo-slice';
import TodoList from '@components/TodoList';
import { addTodos, getTodos } from '@pages/api/todo-api';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

const TodoItem = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const filter = useSelector((state) => state.todoReducer.filter);
  const dispatch = useDispatch();

  let filteredTodos;
  if (filter === 'all') {
    filteredTodos = todos;
  } else if (filter === 'active') {
    filteredTodos = todos.filter((todo) => todo.active === true);
  } else if (filter === 'completed') {
    filteredTodos = todos.filter((todo) => todo.active === false);
  }

  useEffect(() => {
    filteredTodos.map((todo) => {
      addTodos(todo.id, todo);
    });
  }, [addTodos, todos]);

  useEffect(() => {
    const getData = async () => {
      const data = await getTodos();
      dispatch(todoAction.setTodos(data));
    };
    getData();
  }, [getTodos]);

  return (
    <ul>
      {filteredTodos.map((li) => (
        <TodoList key={li.id} id={li.id} text={li.text} />
      ))}
    </ul>
  );
};

export default TodoItem;
