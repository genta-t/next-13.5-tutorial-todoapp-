import React from "react";
import { TypeTodoListProps } from "../typs";
import Todo from "./Todo";

const TodoList = ({ todos }: TypeTodoListProps ) => {
  return (
    <ul className="space-y-3">
      {todos.map((t) => {
        return (
          <Todo key={t.id} todo={t} />
        )
      })}
    </ul>
  )
}

export default TodoList;