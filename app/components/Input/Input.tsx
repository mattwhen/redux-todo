import React, { FC } from "react";

interface Props {
	userValue: string;
	setUserValue: (value: string) => void;
}

const Input: FC<Props> = ({ userValue, setUserValue }) => {
	return (
		<input
			id="input-field"
			className="w-full p-2  text-black border-2 border-gray-200 rounded-md"
			type="text"
			value={userValue}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				setUserValue(e.target.value)
			}
			placeholder="What needs to be done?"
		></input>
	);
};

export default Input;
