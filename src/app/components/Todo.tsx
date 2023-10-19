"use client"
import React, { useEffect, useRef, useState } from "react";
import { deleteTodo, editTodo } from "../api";
import { TypeTodoProps } from "../typs";

const Todo = ({todo}: TypeTodoProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.text);

  useEffect(() => {
    if(isEditing) {
      ref.current?.focus();
    }
  }, [isEditing])

  const handleEdit = async () => {
    setIsEditing(true);
  };
  const handleSave = async () => {
    await editTodo(todo.id, editedTask)
    setIsEditing(false);
  };
  const handleDelete = async () => {
    await deleteTodo(todo.id)
    setIsEditing(true);
  };

  return (
    <li key={todo.id} className="flex items-center justify-between p-4 bg-white rounded-md shadow shadow-gray-300">
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          className="w-8/12 py-1 px-2 rounded border-orange-200 border focus:outline-none"
          value={editedTask}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedTask(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
          <button className="mr-12" onClick={handleSave}>💾</button>
        ) : (
          <button className="mr-12" onClick={handleEdit}>✏️</button>
        )}
        <button onClick={handleDelete}>🗑</button>
      </div>
    </li>
  )
}

export default Todo;