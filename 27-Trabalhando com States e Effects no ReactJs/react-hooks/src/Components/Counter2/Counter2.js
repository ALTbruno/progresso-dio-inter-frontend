import {useState} from 'react';

function SmartCounter() {

	const [quantity, upQuantity] = useState(0);

	return(
		<div className="counter">
			<h2>Contador com State</h2>
			<h1>{quantity}</h1>
			<button onClick={() => upQuantity(quantity+1)}>Aumentar</button>
		</div>
	);
};

export default SmartCounter;