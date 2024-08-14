import React from "react";

const Input = ({userValue}: {userValue: string}) => {
return (
		<div>
			<label htmlFor="input-field">Todo: </label>
			<input
				id="input-field"
				className="w-full p-2 mb-4 text-black border-2 border-gray-200 rounded-md"
				type="text"
				placeholder="What needs to be done?"
			></input>
		</div>
	);
};

export default Input;
