export interface TypeTodo {
  id: string;
  text: string;
}

export interface TypeTodoListProps {
  todos: TypeTodo[]
}

export interface TypeTodoProps {
  todo: TypeTodo
}