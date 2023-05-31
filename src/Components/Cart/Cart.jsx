import { useState, useEffect } from 'react'
import '../Cart/Cart.css'

function Cart({ cart, updateCart }) {

	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(accumulator, plantType) => accumulator + plantType.amount * plantType.price,
		0
	)

	useEffect(() => {
		console.log('le produit à bien était ajouter')
	}, [cart])


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrire le pannier
			</button>
		</div>
	)
}

export default Cart