import './Time.css';

export const Time = ({ currentTime }: { currentTime: Date }) => {
	return (
		<section className='Time'>{currentTime.toLocaleTimeString()}</section>
	);
};
