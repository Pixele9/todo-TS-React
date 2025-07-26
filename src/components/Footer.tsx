import React from "react";
import type { FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
	activeCount: number
	completedCount: number
	filterSelected: FilterValue
	onClearCompleted: () => void
	handleFilterChange: (fitler: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
	completedCount = 0,
	activeCount = 0,
	filterSelected,
	handleFilterChange,
	onClearCompleted,
}) => {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{activeCount}</strong> pending tasks
			</span>

			<Filters 
				filterSelected={filterSelected}
				onFilterChange={handleFilterChange}
			/>

			{
				completedCount > 0 && (
					<button
						className="clear-completed"
						onClick={onClearCompleted}
					>
						Remove completed tasks
					</button>
				)
			}
		</footer>
	);
};
