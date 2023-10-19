import { TypeTodo } from "./typs";

export const getAllTodos = async (): Promise<TypeTodo[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    cache: "no-store", // SSR
  })
  const tasks = res.json();

  return tasks;
};

export const addTodo = async (todo: TypeTodo): Promise<TypeTodo> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
  const newTodo = res.json();

  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<TypeTodo> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({text: newText}),
  })
  const updTodo = res.json();

  return updTodo;
};

export const deleteTodo = async (id: string): Promise<TypeTodo> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const deleteTodo = res.json();

  return deleteTodo;
};
