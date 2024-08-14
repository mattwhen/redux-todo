'use client'
import Image from "next/image";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { store } from "./store";
import Todos from "./components/Todos/Todos";
import { Provider } from "react-redux";

export default function Home() {
	console.log(store.getState());
	

	return (
		<Provider store={store}>
			<Header />
			<h2 className="text-center text-3xl my-4 font-semibold">Todos</h2>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<Container />
			</main>
		</Provider>
	);
}
