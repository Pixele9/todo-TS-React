import React from "react"
import type { TodoText } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
	onAddTodo: ({ text }: TodoText) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
	return (
		<>
			<h1>To-Do</h1> 

			<header className="header">

				<CreateTodo saveTodo={onAddTodo} />

			</header>
		</>
	)
}