import { useState } from 'react'
import type { TodoId , Todo as TodoType } from "./types";
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

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <>
      <h1>To-Do</h1>
      <div className="todoapp">
        <Todos 
          onToggleCompleteTodo={handleCompleted}
        	onRemoveTodo={handleRemove}
          list={todos}
        />
      </div>
    </>
  )
}

export default App
