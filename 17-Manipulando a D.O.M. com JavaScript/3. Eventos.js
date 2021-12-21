// Evento: qualquer ação que o usuário faz em uma página web

// Eventos do mouse: mouseover, mouseout

// Eventos de clique: click, dbclick

// Eventos de atualização: change, load


// Event Listener
// Diretamente no Javascript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.

const botao = document.getElementById('meuBotao');
botao.addEventListener('click', outraFuncao);

/*
Dentro do HTML

Especifica a função a ser chamada diretamente no elemento HTML

<h1 onclick='mudaTexto(this)'> Clique aqui!</h1>

<script>
		function mudaTexto(id) {
			id.innerHTML = "Mudei!";
		}
</script>

*/

