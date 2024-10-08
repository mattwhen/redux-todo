// The redux store is almost always a plain JavaScript object, with other nested data inside of it.
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todo/todo';

// Create our Redux store using the configureStore function from RTK. Requires a mandatory reducer argument. 
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
})

// Infer the type of store
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']



