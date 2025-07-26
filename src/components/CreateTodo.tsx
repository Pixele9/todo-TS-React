import React, { useState } from "react";
import type { TodoText } from "../types";

interface Props {
	onAddTodo: ({ text }: TodoText) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		saveTodo({ text: inputValue })
		setInputValue('')	
	}

	return (
		<form onSubmit={handleSubmit} >
			<input
				className="new-todo"
				placeholder="What will you do next?"
				value={inputValue}
				onChange={(e) => { 
					setInputValue(e.target.value)
				}}
				autoFocus
			/>
		</form>
	);
};
