import type { ListOfTodos, TodoId, Todo as TodoType } from "../types"
import { Todo } from "./Todo"

interface Props {
	todos: ListOfTodos,
	onRemoveTodo: ({ id }: TodoId) => void
	onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ list, onRemoveTodo, onToggleCompleteTodo })  => {
	return (
		<ul className="todo-list">
			{list.map(el => (
				<li key={el.id} className={`${el.completed ? 'completed' : ''}`}>
					<Todo 
						key={el.id}
						id={el.id}
						text={el.text}
						completed={el.completed}
						createdAt={el.createdAt}
						onRemoveTodo={onRemoveTodo}
						onToggleCompleteTodo={onToggleCompleteTodo}
					/>
				</li>
			))}
		</ul>
	)
}