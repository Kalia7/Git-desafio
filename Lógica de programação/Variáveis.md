## Variáveis

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f7aa38f8-8f84-4e2c-b628-79ffe24d4c61/Untitled.png)

Imagine que você é dono de um terreno muito grande e notou que tem alguma pessoas precisam muito de um lugar para estacionar, e você decide usar esse seu terreno para fazer de estacionamento e ganhar um dinheirinho.

Então você analisa seu espaço e separa 7 vagas para carros, 6 para motos e 5 para caminhões. E para identificar essas vagas, coloca um identificador, digamos que de a1 a a7 são as vagas para carros, de m1 a m6 as de moto e 1d a 5d as de caminhão.

O que você acabou de fazer foi organizar seu terreno e definir espaços que caiba os respectivos automóveis, porque concorda comigo que ficaria muito complicado se você só colocasse abrisse o estacionamento sem organização nenhuma?

Mas agora que já tá tudo certo você pode receber os clientes. E então vamos começar a colocar, carros nas vagas de carros, motos nas de motos e caminhões nas de caminhões.

Mas aconteceu de um cliente querer uma vaga que já está ocupada, isso claro é impossível, o carro anterior teria que sair primeiro para que outro pudesse ficar no lugar.

Desse mesmo modo o terreno seria um espaço na memoria onde eu posso inserir dados, mas não posso colocar de maneria desorganizada, por isso eu crio espaços delimitados, assim como fizemos com os automóveis, cada espaço ira receber um nome para que possamos identificar, e depois colocaremos os valores. 

Sabendo que, as variáveis terão um tipo, e não poderão receber dois valores de uma vez, é necessário retirar um valor pra inserir outro.

### Exemplo

```bash
programa
{
	
	funcao inicio()
	{
		cadeia a1 //Aqui eu definir o nome e o tipo dessa variável

		escreva("Insira um automovel: ")
		leia(a1)
		escreva(a1, " está na vaga a1 \n")
	}
}
```

### Identificadores

São nomes que se dão a variáveis, tipos, funções e rótulos. Mas existem algumas regras para podermos colocar os nomes.

Regras:

1. Deve começar com uma letra
2. Os próximos podem ser letra ou números
3. Não pode utilizar nenhum símbolo, exceto _
4. Não pode conter espaços em branco
5. Não pode conter letras com acentos
6. Não pode ser uma palavra reservada

Palavras reservadas → São palavras utilizadas pela própria linguagem como, int, cadeia, função, escreva etc.
