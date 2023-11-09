import style from './Card.module.scss';

const Card = () => {
	const arrayData = [
		{
			imageUrl: 'https://images.ctfassets.net/fzn2n1nzq965/wEsTNDVgdEqaPAKkFdqnL/c69e1649432f1b772d86d81e423b7e3e/buttons.svg?q=80',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
		},
		{
			imageUrl: 'https://images.ctfassets.net/fzn2n1nzq965/5C5LvT3YZvRTGYn7uabXGj/7da8063dc77c67b7f66a1479f47409c8/build_with_stripe.svg?q=80',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
		},
		{
			imageUrl: 'https://images.ctfassets.net/fzn2n1nzq965/5k7VeoAQQDK7032fIF6PEU/25f3670f5f4508103ee77afd92b7e074/typeform-logo.svg',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
		},
	];

	return (
		<>
			{arrayData.length ? arrayData.map((data, index) => (
				<div key={index} className={style.card}>
					<img src={data.imageUrl} alt={`image ${index}`} />
					<p>{data.text}</p>
				</div>
			)) : <p>not found</p>}
		</>
	);
};

export default Card;
