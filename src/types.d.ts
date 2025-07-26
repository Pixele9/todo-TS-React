export interface Todo {
  id: number | string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type TodoText = Pick<Todo, 'text'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoCreatedAt = Pick<Todo, 'createdAt'>

export type ListOfTodos = Todo[];

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]