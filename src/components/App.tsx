import { Count } from './Count';
import { Buttons } from './Buttons';
import { FC, useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { MaxValue } from './MaxValue';
import { Settings } from './Settings';

export const App: FC = () => {
	const [count, setCount] = useState(0);

	const [maxValue, setMaxValue] = useState(5);

	const [settings, setSettings] = useState(false);

	const reset = () => setCount(0);

	const onOffSettings = () => setSettings(!settings);

	const increment = () => setCount((prevCount) => prevCount + 1);

	const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setCount(Number(e.target.value));

	const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.target.value));

	const handleSettingsSubmit = (e: React.FormEvent<HTMLFormElement>) => (e.preventDefault(), setSettings(false));

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
				<Settings count={count} maxValue={maxValue} onOffSettings={onOffSettings} handleMaxValueChange={handleMaxValueChange} handleStartValueChange={handleStartValueChange} handleSettingsSubmit={handleSettingsSubmit} />
			)}
			<Buttons increment={increment} reset={reset} disableIncrement={progress === 100} disableReset={progress < 100} settings={settings} onOffSettings={onOffSettings} />
		</div>
	);
};
