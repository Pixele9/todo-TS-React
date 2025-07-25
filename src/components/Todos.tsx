import type { ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
	todos: ListOfTodos,
	onRemoveTodo: (id: number) => void
}

export const Todos: React.FC<Props> = ({ list, onRemoveTodo })  => {
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
					/>
				</li>
			))}
		</ul>
	)
}