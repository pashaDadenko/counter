import { FC } from 'react';

type ProgressBarProps = {
	progress: number;
};

export const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
	const progressClassName = progress >= 100 ? 'progress complete' : 'progress';

	return (
		<div className='progressBar'>
			<div className={progressClassName} style={{ width: `${progress}%` }}></div>
		</div>
	);
};
