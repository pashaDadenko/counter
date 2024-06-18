import { Button } from './Button';
import { ChangeEvent, FC, FormEvent } from 'react';

type SettingsPropsType = {
	count: number;
	maxValue: number;
	error: string | null;
	onOffSettings: () => void;
	handleSettingsSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleMaxValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleStartValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Settings: FC<SettingsPropsType> = ({ count, maxValue, error, onOffSettings, handleMaxValueChange, handleStartValueChange, handleSettingsSubmit }) => {
	return (
		<form onSubmit={handleSettingsSubmit}>
			<div className='wrap'>
				<label className='label' htmlFor='maxValue'>
					Max value:
				</label>
				<input className='input' type='number' id='maxValue' value={maxValue} onChange={handleMaxValueChange} />
			</div>
			<div className='wrap'>
				<label className='label' htmlFor='startValue'>
					Start value:
				</label>
				<input className='input' type='number' id='startValue' value={count} onChange={handleStartValueChange} />
			</div>
			<div className={`error ${!error ? 'hidden' : ''}`}>{error}</div>
			<Button onClick={onOffSettings} title='SET' className='button' />
		</form>
	);
};
