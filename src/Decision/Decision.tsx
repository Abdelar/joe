import './Decision.css';

export const Decision = ({ currentTime }: { currentTime: Date }) => {
	const currentHour = currentTime.getHours();
	const feedback: boolean =
		(currentHour >= 10 && currentHour < 12) ||
		(currentHour >= 14 && currentHour < 16);

	return (
		<section className='Decision'>
			<article className='question'>
				Is now a good time to drink a cup of coffee?
			</article>
			<article className='answer'>
				{feedback ? 'Yes!' : 'Probably not!'}
			</article>
			<article className='justification'>
				<a
					href='https://youtu.be/TGVmm8epcjc'
					target='_blank'
					rel='noreferrer'>
					According to{' '}
					<i title='A doctorate in Nutrition and Metabolic Biology'>
						Frank A. Cusimano
					</i>
				</a>
			</article>
		</section>
	);
};
