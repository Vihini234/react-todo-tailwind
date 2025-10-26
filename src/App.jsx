import { useState } from "react";

function App() {
  const [task, setTask] = useState("");           // Current input
  const [todos, setTodos] = useState([]);         // List of tasks

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  // Toggle task done/undone
  const toggleTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Delete task
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">My To-Do List</h1>

      {/* Input + Add button */}
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Tasks List */}
      <ul className="w-full max-w-md space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 rounded-lg shadow"
          >
            <span
              onClick={() => toggleTask(index)}
              className={`cursor-pointer flex-1 ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-gray-500 mt-4">No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default App;
