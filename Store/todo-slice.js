import { createSlice } from '@reduxjs/toolkit';

const initialTodo = { todos: [], filter: 'all', theme: 'morning' };

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodo,
  reducers: {
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos.push({ id, text, active: true });
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    showAll: (state) => {
      state.filter = 'all';
    },
    isActive: (state, action) => {
      const id = action.payload.id;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.active = !todo.active;
      }
    },
    showActive: (state) => {
      state.filter = 'active';
    },
    showCompleted: (state) => {
      state.filter = 'completed';
    },
    clearCompleted: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter(
        (todo) => todo.id !== id && todo.active === true
      );
    },
    changeTheme: (state) => {
      state.theme = state.theme === 'morning' ? 'night' : 'morning';
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const todoAction = todoSlice.actions;
export default todoSlice;
