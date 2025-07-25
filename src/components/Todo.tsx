import React from "react";
import type { TodoId, Todo as TodoType } from "../types";

interface Props extends TodoType {
	onRemoveTodo: ({ id }: TodoId) => void;
	onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
	id,
	text,
	completed,
	createdAt,
	onRemoveTodo,
	onToggleCompleteTodo
}) => {
	return (
		<div>
			<input
				className="toggle"
				checked={completed}
				type="checkbox"
				onChange={(e) => {
					console.log('el: ', e.target.checked)
					onToggleCompleteTodo({ id, completed: e.target.checked })
				}}
			/>
			<label>{text}</label>
			<button className="destroy" onClick={() => {
				onRemoveTodo(id)
			}} />
		</div>
	);
};
