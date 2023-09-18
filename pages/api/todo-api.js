const todoApi = 'https://todo-app-5e92a-default-rtdb.firebaseio.com';
export const getTodos = async () => {
  const response = await fetch(todoApi);
  const responseData = await response.json();
  if (!response.ok)
    throw new Error(
      responseData.message || 'Can not fetch the data pls check your internet'
    );

  const loadedTodos = [];
  for (const key in responseData) {
    const data = {
      id: key,
      ...responseData[key],
    };
    loadedTodos.push(data);
  }
  return loadedTodos;
};

export const addTodos = async (id, TodoData) => {
  const response = await fetch(
    `https://todo-app-5e92a-default-rtdb.firebaseio.com/todos/${id}.json`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(TodoData),
    }
  );
  const responseData = await response.json();
  if (!response.ok)
    throw new Error(responseData.message || 'can not send the data');
  return null;
};

export const deleteTodo = async (id) => {
  const response = await fetch(
    `https://todo-5c806-default-rtdb.firebaseio.com/todos/${id}.json`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) throw new Error('can not delete the data');
};

export const clearCompletedTodos = async (todos) => {
  const completedTodos = todos.filter((todo) => !todo.active);
  for (const todo of completedTodos) {
    const response = await fetch(
      `https://todo-5c806-default-rtdb.firebaseio.com/todos/${todo.id}.json`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) throw new Error('can not delete the data');
  }
};
