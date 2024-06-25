import { Count } from './Count';
import { Buttons } from './Buttons';
import { MaxValue } from './MaxValue';
import { Settings } from './Settings';
import { ProgressBar } from './ProgressBar';
import { useLocalStorage } from '../hook/useLocalStorage.ts';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

export const App: FC = () => {
	const [count, setCount] = useLocalStorage<number>('count', 0);
	const [maxValue, setMaxValue] = useLocalStorage<number>('maxValue', 5);
	const [settings, setSettings] = useLocalStorage<boolean>('settings', false);
	const [error, setError] = useState<string | null>(null);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const reset = () => {
		setCount(0);
		setMaxValue(Math.floor(Math.random() * 10) + 1);
		setError(null);
	};

	const onOffSettings = () => {
		setSettings(!settings);
		setError(null);
	};

	const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = +e.target.value;
		if (newValue < 0 || newValue > maxValue) {
			setError(`Start value must be between 0 and ${maxValue}`);
		} else {
			setError(null);
			setCount(newValue);
		}
	};

	const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		if (newValue < count) {
			setError(`Max value must be greater than or equal to start value (${count})`);
		} else {
			setError(null);
			setMaxValue(newValue);
		}
	};

	const handleSettingsSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!error) {
			setSettings(!settings);
		}
	};

	const progress = (count / maxValue) * 100;

	return (
		<div className='wrapper'>
			{!settings ? (
				<>
					<MaxValue maxValue={maxValue} />
					<Count count={count} progress={progress} />
					<ProgressBar progress={progress} />
				</>
			) : (
				<Settings count={count} maxValue={maxValue} error={error} onOffSettings={onOffSettings} handleMaxValueChange={handleMaxValueChange} handleStartValueChange={handleStartValueChange} handleSettingsSubmit={handleSettingsSubmit} />
			)}
			<Buttons increment={increment} reset={reset} disableIncrement={progress === 100} disableReset={progress < 100} settings={settings} onOffSettings={onOffSettings} />
		</div>
	);
};
