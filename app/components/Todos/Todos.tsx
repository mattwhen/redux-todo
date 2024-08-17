import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import {
	addTodo,
	removeTodo,
	completedTodo,
	removeAllTodo,
} from "@/app/features/todo/todo";
import { store } from "@/app/store";
import "./Todos.css";

const Todos = () => {
	const [userValue, setUserValue] = useState<string>("");
	const todos = useAppSelector((state) => state.todo);
	const dispatch = useAppDispatch();

	const handleAddTodo = () => {
		if (userValue) {
			dispatch(addTodo(userValue));
			setUserValue("");
		}
	};

	const handleRemoveTodo = (item: number) => {
		// Remove todo
		if (item) {
			dispatch(removeTodo(item));
		}

		return null;
	};

	const handleClearAllTodo = () => {
		// Clear all Todo items.
		dispatch(removeAllTodo());
	};

	return (
		<div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex h-12 mb-2 md:justify-center md:w-full"
			>
				<Input userValue={userValue} setUserValue={setUserValue} />
				<div className="flex">
					{/* Purple Button */}
					<Button
						background={"bg-purple-500 hover:bg-purple-300"}
						onClick={handleAddTodo}
					>
						Add
					</Button>
					{/* Red Button */}
					<Button
						background={"bg-red-600 hover:bg-red-500"}
						onClick={handleClearAllTodo}
					>
						Clear All
					</Button>
				</div>
			</form>
			<ul className="todo-list list-disc list-inside">
				{todos?.map(
					(item: {
						text:
							| string
							| React.ReactElement<
									any,
									string | React.JSXElementConstructor<any>
							  >
							| Iterable<React.ReactNode>
							| React.ReactPortal
							| Promise<React.AwaitedReactNode>
							| null
							| undefined;
						id: number;
					}) => {
						return (
							<>
								<li key={item.id} className="text-black">
									{item.text}
									<button
										onClick={() => handleRemoveTodo(item.id)}
										className="delete-btn text-black p-4"
									></button>
								</li>
							</>
						);
					}
				)}
			</ul>
		</div>
	);
};

export default Todos;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
