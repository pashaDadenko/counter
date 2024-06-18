import { FC } from 'react';
import { Button } from './Button';

type SettingsPropsType = {
	count: number;
	maxValue: number;
	onOffSettings: () => void;
	handleSettingsSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleMaxValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleStartValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Settings: FC<SettingsPropsType> = ({ count, maxValue, onOffSettings, handleMaxValueChange, handleStartValueChange, handleSettingsSubmit }) => {
	return (
		<form onSubmit={handleSettingsSubmit}>
			<div>
				<label htmlFor='maxValue'>Max value:</label>
				<input type='number' id='maxValue' value={maxValue} onChange={handleMaxValueChange} />
			</div>
			<div>
				<label htmlFor='startValue'>Start value:</label>
				<input type='number' id='startValue' value={count} onChange={handleStartValueChange} />
			</div>
			<Button onClick={onOffSettings} title='SET' className='button' />
		</form>
	);
};
