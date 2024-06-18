import { FC } from 'react';

type CountPropsType = {
	count: number;
	progress: number;
};

export const Count: FC<CountPropsType> = ({ count, progress }) => {
	return (
		<div className='count' style={progress >= 100 ? { color: '#ff4d4d' } : {}}>
			{count}
		</div>
	);
};
