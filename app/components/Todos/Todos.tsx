import React, { useState } from "react";
import Input from "../Input/Input";

// Define the type
const Todos = () => {
  const [userValue, setUserValue] = useState("");

	interface Person {
		firstName: string;
		lastName: string;
	}

	function greeter(person: Person) {
		return "Hello " + person.firstName + " " + person.lastName;
	}

	let user = { firstName: "John", lastName: "Appleseed" };

	return (
		<div>
			<Input userValue={userValue} />
			<ul className="list-disc list-inside">
				<li className="text-black">{greeter(user)}</li>
				<li className="text-black">Data</li>
				<li className="text-black">Data</li>
				<li className="text-black">Data</li>
			</ul>
		</div>
	);
};

export default Todos;
