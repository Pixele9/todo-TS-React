import React, { useState } from 'react'
import type { FilterValue, TodoId , Todo as TodoType } from "./types";
import { Todos } from "./components/Todos";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

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
  const [ filterSelected, setFilterSelected ] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    console.log('filter', filter)
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(el => !el.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed 
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <>
      <div className="todoapp">
        <Header 
          onAddTodo={() => {}}
         />
        <Todos 
          onToggleCompleteTodo={handleCompleted}
        	onRemoveTodo={handleRemove}
          list={filteredTodos}
        />
        <Footer 
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={handleRemoveAllCompleted}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </>
  )
}

export default App
