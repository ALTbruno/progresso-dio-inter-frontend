import {useState, useEffect} from 	'react';
import './Counter3.css'

function Counter3() {

	const [quantidade, setQuantidade] = useState(0);
	const [buttonStyle, setByttonStyle] = useState('counter-button-minus-active');

	useEffect(() => {
		document.getElementById('moeda').innerHTML = `R$ ${2.00 * quantidade}`;
	}, [quantidade]);


	function down() {

		if (quantidade <= 1) {
			setByttonStyle('counter-button-minus-desactive');
		};

		if (quantidade > 0) {
			setQuantidade(quantidade-1);
		}
	};

	function up() {
		setQuantidade(quantidade+1);
		setByttonStyle('counter-button-minus-active');
	};

	return(
		<>
			<div className='counter-wrapper'>
				<button onClick={down} className={buttonStyle}> - </button>
				<p>{quantidade}</p>
				<button onClick={up} className='counter-button-plus-active'> + </button>
			</div>
			<div className='valor-pagamento'>
				<h2>Valor da compra:</h2>
				<div id='moeda'></div>
			</div>
		</>
	)
};

export default Counter3;