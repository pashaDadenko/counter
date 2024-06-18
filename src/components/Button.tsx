import { FC } from 'react';

type ButtonProps = {
	title: string;
	className: string;
	disabled?: boolean;
	onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ title, onClick, className, disabled }) => {
	return (
		<button className={className} onClick={onClick} disabled={disabled}>
			{title}
		</button>
	);
};
