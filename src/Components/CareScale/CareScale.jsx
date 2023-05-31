import Sun from '../../Assets/sun.svg'
import Water from '../../Assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
			)
	
	function careNeed(scaleValue, careType) {
		const type = careType === 'light' ? 'lumière' : 'arrosage'
		const value = scaleValue === 1 ? 'peu' : scaleValue === 2 ? 'modérament' : 'beaucoup'

		alert(`Cette plante a besoin de ${value} en ${type}`)
	}

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span onClick={() => careNeed(scaleValue, careType)} key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale