import { motion, AnimatePresence } from "framer-motion"

import style from './Card.module.scss';

const Card = () => {
	const arrayData = [
		{
			imageUrl: 'https://img.freepik.com/free-photo/team-programmers-talking-about-algorithm-running-laptop-screen-pointing-source-code-while-sitting-desk-software-developers-collaborating-data-coding-group-project_482257-33548.jpg?w=1380&t=st=1699983465~exp=1699984065~hmac=68b4f426aac559ed94f618cd73c4803213303bde7fcc33fb18109790527ad777',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
		},
		{
			imageUrl: 'https://www.utadeo.edu.co/sites/tadeo/files/styles/global_news_780x460/public/node/continued/field_image/diplomado_analitica_de_datos_aplicada_a_riesgos_laborales_foto_portada_.jpg?itok=nAFxOS-Z',
			text: 'Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
		},
		{
			imageUrl: 'https://www.workspace.co.uk/media/archive%20articles/u/shutterstock_1039045117.jpg?width=1920&height=800&mode=crop&format=webp&quality=60&v=202012211734',
			text: 'Excepturi non laudantium tempora distinctio assumenda aut eaque, molestiae expedita totam, nemo blanditiis ex velit itaque incidunt maxime ipsa ipsum veritatis iure?',
		},
	];

	const testAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 }
		}),
	}

	return (
		<>
			{arrayData.length ? arrayData.map((data, index) => (

				<motion.div
					key={index}
					className={style.card}
					initial="hidden"
					whileInView="visible"
					custom={2 * index}
					variants={testAnimation}
					viewport={{ amout: 0.2 }}
				>
					<div className={style.wrapperImg}>
						<img src={data.imageUrl} alt={`image ${index}`} />
					</div>
					<p>{data.text}</p>
					<a href='#' className={style.test}>More</a>
				</motion.div >
			)) : <p>not found</p>}
		</>
	);
};

export default Card;
