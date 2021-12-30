function Counter() {

	let quantity = 0;

	function upQuantity() {
		quantity+=1;
		document.getElementById('counter-box').innerHTML = quantity;
	};

	return(
		<div className="counter">
			<h2>Contador sem State</h2>
			<h1 id="counter-box">{quantity}</h1>
			<button onClick={upQuantity}>Aumentar</button>
		</div>
	)

};

export default Counter;