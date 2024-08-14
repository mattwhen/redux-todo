import { createSlice } from "@reduxjs/toolkit";

// Define the Type or Shape
interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

// Set the initial state with a Type.
const initialState: Todo[] = [];

// Slices contain reducer logic for updating the state.
// They also generate actions (event handlers) that can be 'dispatched' to trigger updates.
const todoSlice = createSlice({
	name: "todos",
	initialState,
	// Reducers
	reducers: {
		addTodo: (state, action) => {
			// RTK allows us to write mutating logic in reducers.
			// It doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes.
			const newTodo: Todo = {
				id: Date.now(),
				text: action.payload,
				completed: false,
			};
			state.push(newTodo);
		},
        completedTodo: (state, action) => {
            // Update the completed state to equal true when checked.
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo;
            }
        },
		removeTodo: (state, action) => {
			// Remove todo based on payload
			return state.filter((todo) => todo.id === action.payload);
		},
	},
});

// Export the generated action creators for use in other components.
export const { addTodo, completedTodo, removeTodo } = todoSlice.actions; 

// Export the slice reducer for use in the store configuration. 
export default todoSlice.reducer;