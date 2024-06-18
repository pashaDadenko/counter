import { FC } from 'react';

type MaxValuePropsType = {
	maxValue: number;
};

export const MaxValue: FC<MaxValuePropsType> = ({ maxValue }) => {
	return <div className='maxValue'>Max value: {maxValue}</div>;
};
