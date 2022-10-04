import { useEffect, useState } from 'react';
import { Time } from '../Time/Time';
import { Decision } from '../Decision/Decision';
import './App.css';

export const App = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<main className='App'>
			<Time currentTime={currentTime} />
			<Decision currentTime={currentTime} />
		</main>
	);
};
