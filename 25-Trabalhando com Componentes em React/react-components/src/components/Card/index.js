import { useState } from 'react';
import Button from '../Button';

const Card = () => {

	const [valor, setValor] = useState(0);

	function adicionar () {
		setValor(valor + 1);
	};

	function remover () {
		setValor(valor - 1);
	};

	return(
		<div className="card">
			<div className="card-header">
				Card
			</div>
			<div className="card-body">
				<Button className="btn btn-danger" onClick={remover}>Remover</Button>
				<p>{valor}</p>
				<Button className="btn btn-success" onClick={adicionar}>Adicionar</Button>

				{/* <Button onClick={(event) => {setValor(event.target.value + 1)}}>Adicionar</Button> */}
			</div>
		</div>
	)
};

export default Card;