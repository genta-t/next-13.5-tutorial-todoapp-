import { getAllTodos } from './api';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

const Home = async () => {
  const todos = await getAllTodos();
  console.log(todos);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700">TODO APP</h1>
      <div className="w-full max-w-xl mt-5 mb-40">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  )
}

export default Home;