import React from "react";
import type { Todo as TodoType } from "../types";

interface Props extends TodoType {
	onRemoveTodo: (id: number) => void;
}

export const Todo: React.FC<Props> = ({
	id,
	text,
	completed,
	createdAt,
	onRemoveTodo,
}) => {
	return (
		<div>
			<input
				className="toggle"
				checked={completed}
				type="checkbox"
				onChange={() => {}}
			/>
			<label>{text}</label>
			<button className="destroy" onClick={() => {
				onRemoveTodo(id)
			}} />
		</div>
	);
};
