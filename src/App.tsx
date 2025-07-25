import { useState } from 'react'
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: 1,
    text: "Drink water!",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    text: "Practice TS / React",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    text: "Work on personal project",
    completed: false,
    createdAt: new Date(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      <h1>To-Do</h1>
      <div className="todoapp">
        <Todos 
        	onRemoveTodo={handleRemove}
          list={todos}
        />
      </div>
    </>
  )
}

export default App
