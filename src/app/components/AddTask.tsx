"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
import { addTodo } from "../api";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTodo({ id: uuidv4(), text: title})

    setTitle("");
  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input 
        type="text"
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-green-700"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        value={title}
      />
      <button className="w-full px-4 py-2 text-white bg-green-600 rounded transform hover:bg-green-400 hover:scale-95 duration-300">Add</button>
    </form>
  )
}

export default AddTask;