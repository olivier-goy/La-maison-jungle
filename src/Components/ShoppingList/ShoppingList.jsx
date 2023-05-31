import { plantList } from '../../Datas/plantList.js'
import { useState } from 'react'
import Categories from '../Categories/Categories.jsx'
import PlantItem from '../PlantItem/PlantItem.jsx'
import '../ShoppingList/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [useCategory, setUseCategory] = useState('')
	const categories = plantList.reduce(
		(accumulator, plant) =>
			accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				useCategory={useCategory}
				setUseCategory={setUseCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => (
					!useCategory || useCategory === category ? (

					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
					) : null
				))}
			</ul>
		</div>
	)
}

export default ShoppingList