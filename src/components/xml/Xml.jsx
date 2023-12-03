import React, { useState } from 'react';
import processData from './data.xml.js'
import ProductList from './ProductList';
import Button from '../button/Button'

import style from './Xml.module.scss'

const Xml = () => {

	const [result, setResult] = useState(null);
	const [input, setInput] = useState("");

	const handleClick = async () => {
		try {
			document.getElementById('loading').innerHTML = ''
			document.getElementById('loading').classList.add(style.loading)
			const result = await processData();
			setResult(result);
			console.log(result);
		} catch (error) {
			console.error('Error in handleClick:', error);
		}
	}

	return (
		<>
			<div className={style.container}>
				<div className={style.nav}>
					{result != null ?
						<input
							placeholder='Type to search...'
							type="text"
							onChange={(e) => setInput(e.target.value.toLowerCase())}
						/>
						:
						<Button
							text="Loading list product"
							onClick={handleClick}
							id="loading"
						/>
					}
				</div>
				<div className={style.wrapperProducts}>
					<ProductList data={result} input={input} />
				</div>
			</div>
		</>
	);
};

export default Xml;




// import xmlData from './dbXml.xml';

// const localXmlPath = xmlData;

// const fetchXml = async (path) => {
// 	try {
// 		const response = await fetch(path);
// 		const xmlText = await response.text();
// 		return xmlText;
// 	} catch (error) {
// 		console.error('Error fetching local XML:', error);
// 		throw error;
// 	}
// };

// const parseXml = (xmlText) => {
// 	try {
// 		const parser = new DOMParser();
// 		const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
// 		return xmlDoc;
// 	} catch (error) {
// 		console.error('Error parsing XML:', error);
// 		throw error;
// 	}
// };

// const handleClick = async () => {
// 	try {
// 		const xmlText = await fetchXml(localXmlPath);
// 		const xmlDoc = parseXml(xmlText);
// 		const offers = xmlDoc.querySelector('offers')

// 		if (offers) {
// 			const offer = offers.querySelectorAll('offer')
// 			const dataOffer = []
// 			offer.forEach((poduct) => {
// 				const vendor = poduct.querySelector('vendor').textContent
// 				const country = poduct.querySelector('country').textContent
// 				const price = poduct.querySelector('price').textContent
// 				const name = poduct.querySelector('name').textContent
// 				const picture = poduct.querySelector('picture').textContent
// 				const vendorCode = poduct.querySelector('vendorCode').textContent
// 				// const id = poduct.getAttribute('id')
// 				dataOffer.push({
// 					name: name,
// 					brend: vendor,
// 					country: country,
// 					price: price,
// 					img: picture,
// 					vendorCode: vendorCode,
// 				})
// 				setResult(dataOffer);
// 			})
// 		}
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// setResult = data()


// {result && result.filter((config) => {
// 	const lowercaseInput = input.toLowerCase();
// 	return (
// 		input === '' ||
// 		config.name.toLowerCase().includes(lowercaseInput) ||
// 		config.brend.toLowerCase().includes(lowercaseInput)
// 	);
// }).map((config, index) => (
// 	<div key={index} className={style.product}>
// 		<img
// 			src={config.img}
// 			alt=""
// 			className={style.img}
// 		/>
// 		<h4>{config.name}</h4>
// 		<p>brend: {config.brend}</p>
// 		<p>Country: {config.country}</p>
// 		<p>Price: {config.price} UAH</p>
// 		<p>vendorCode: {config.vendorCode} </p>
// 		{/* <p>id: {config.id} </p> */}
// 	</div>
// ))}