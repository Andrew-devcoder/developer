import React, { useState } from 'react';
import xmlData from './dbXml.xml';
import Button from '../button/Button'


import style from './Xml.module.scss'

const Xml = () => {

	const [result, setResult] = useState(null);

	const localXmlPath = xmlData;

	const fetchXml = async (path) => {
		try {
			const response = await fetch(path);
			const xmlText = await response.text();
			return xmlText;
		} catch (error) {
			console.error('Error fetching local XML:', error);
			throw error;
		}
	};

	const parseXml = (xmlText) => {
		try {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
			return xmlDoc;
		} catch (error) {
			console.error('Error parsing XML:', error);
			throw error;
		}
	};

	const handleClick = async () => {
		try {
			const xmlText = await fetchXml(localXmlPath);
			const xmlDoc = parseXml(xmlText);
			// console.log(xmlDoc);
			const offers = xmlDoc.querySelector('offers')

			if (offers) {
				const offer = offers.querySelectorAll('offer')
				const dataOffer = []
				offer.forEach((poduct) => {
					const vendor = poduct.querySelector('vendor').textContent
					const country = poduct.querySelector('country').textContent
					const price = poduct.querySelector('price').textContent
					const name = poduct.querySelector('name').textContent
					const picture = poduct.querySelector('picture').textContent
					const vendorCode = poduct.querySelector('vendorCode').textContent
					// const id = poduct.getAttribute('id')



					dataOffer.push({
						name: name,
						brend: vendor,
						country: country,
						price: price,
						img: picture,
						vendorCode: vendorCode,
					})

					setResult(dataOffer);

					// console.log(config)
				})
			}

			// console.log(xmlDoc.documentElement.outerHTML);

			// console.log(xmlDoc.documentElement.textContent);
		} catch (error) {
			// Обробіть помилку
			console.error(error);
		}
	};

	const [input, setInput] = useState("");

	return (
		<>
			<div className={style.container}>

				<Button text="Get XML file" onClick={handleClick}></Button>

				<input
					placeholder='Type to search...'
					type="text"
					onChange={(e) => setInput(e.target.value.toLowerCase())}
				/>

				<div className={style.wrapperProducts}>

					{result && result.filter((config) => {
						const lowercaseInput = input.toLowerCase();
						return (
							input === '' ||
							config.name.toLowerCase().includes(lowercaseInput) ||
							config.brend.toLowerCase().includes(lowercaseInput)
						);
					}).map((config, index) => (
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
				</div>
			</div>
		</>
	);
};

export default Xml;
