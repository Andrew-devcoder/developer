import { useEffect } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {

	const { id } = useParams()

	useEffect(() => {
		if (!id) return

		const fetchData = async () => {
			const data = await ProductService.getProduct(id)

			setProduct(data)
		}

		fetchData()
	}, [id])

	return (
		<>
			<h1>product {id}</h1>
		</>
	)
}
export default ProductDetail