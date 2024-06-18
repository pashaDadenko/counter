import { FC } from 'react';
import { Button } from './Button';

type ButtonsPropsType = {
	settings: boolean;
	reset: () => void;
	disableReset: boolean;
	increment: () => void;
	onOffSettings: () => void;
	disableIncrement: boolean;
};

export const Buttons: FC<ButtonsPropsType> = ({ increment, reset, disableIncrement, disableReset, settings, onOffSettings }) => {
	return (
		<div className='buttons'>
			{!settings && (
				<>
					<Button onClick={increment} title='INC' className='button' disabled={disableIncrement} />
					<Button onClick={reset} title='RES' className='button' disabled={disableReset} />
					<Button onClick={onOffSettings} title='SET' className='button' />
				</>
			)}
		</div>
	);
};
