import style from './Card.module.scss';

const Card = () => {
	const arrayData = [
		{
			imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGha6Z1pM7IAa16uznDgQAtNkMZzr4zuRgxHYMHPbuk7Aotlu_TSp3_cwY_8FR_vr204A&usqp=CAU',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
		},
		{
			imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXd2ycuPpBbXBt0tOufaAnDHYPd-0WsLydiR-CLImEzDG_JPFbLGuIkKxpCIj1qDFqJI&usqp=CAU',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
		},
		{
			imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimPqIWEagSEg-OSt-IrnWdcSUkl23d19cGxTKD0ruw_yqop5D3aihbycpNStFRMhH7r8&usqp=CAU',
			text: 'Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
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
