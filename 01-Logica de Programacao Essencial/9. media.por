programa
{
	
	funcao inicio()
	{
		real vendasJan,vendasFev,vendasMar,vendasAbr,totalVendas,mediaVendas
		cadeia vendedor

		escreva("Digite o nome do vendedor:")
		leia(vendedor)
		escreva("Digite o valor de vendas do mês de Janeiro:")
		leia(vendasJan)
		escreva("Digite o valor de vendas do mês de Fevereiro:")
		leia(vendasFev)
		escreva("Digite o valor de vendas do mês de Março:")
		leia(vendasMar)
		escreva("Digite o valor de vendas do mês de Abrl:")
		leia(vendasAbr)

		totalVendas = (vendasJan+vendasFev+vendasMar+vendasAbr)

		mediaVendas = (totalVendas)/4

		escreva("No primeiro trimestre do ano, o valor total de vendas do funcionário " + vendedor + " foi de " + totalVendas + "." + "\n" + "A média mensal foi de " + mediaVendas + ".")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 695; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */