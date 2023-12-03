import React from 'react';
import style from './Xml.module.scss'


const ProductList = ({ data, input }) => (
	<>
		{data && data
			.filter((config) => {
				const lowercaseInput = input.toLowerCase();
				return (
					input === '' ||
					config.name.toLowerCase().includes(lowercaseInput) ||
					config.brend.toLowerCase().includes(lowercaseInput)
				);
			})
			.map((config, index) => (
				<div key={index} className={style.product}>
					<img
						src={config.img}
						alt=""
						className={style.img}
					/>
					<h4>{config.name}</h4>
					<p>brend: {config.brend}</p>
					<p>Country: {config.country}</p>
					<p>Price: {config.price} UAH</p>
					<p>vendorCode: {config.vendorCode} </p>
					{/* <p>id: {config.id} </p> */}
				</div>
			))}
	</>
);

export default ProductList;
