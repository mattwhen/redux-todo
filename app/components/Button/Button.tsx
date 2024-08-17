import React, { FC } from "react";

interface ButtonProps {
	background: string;
	children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ children, background, onClick }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`${background} text-sm mx-2 font-medium  text-white border border-none rounded-md p-2 hover:text-black hover:duration-150 ease-out duration-200`}
		>
			{children}
		</button>
	);
}

export default Button;
