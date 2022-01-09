# Introduzir o que é lógica

Programar é resolver problemas, e para isso a gente utiliza a lógica.

- A lógica de acordo com o dicionario é coerência de raciocínio e de ideias. Ou, uma sequencia coerente, regular e necessária de acontecimentos.
- Dar um exemplo → Atravessar a rua, Acordar etc.
- **Método 5Q’s para montar um algoritmo** 
**Analise criticamente o problema e descubra**: (tente explicar este problema pra você mesmo em voz alta peça mais informações/investigue mais até você compreender completamente o problema.)
    1. Quais são os dados de entrada necessários?
    2. O que devo fazer com estes dados?
    3. Quais são as restrições deste problema?
    4. Qual é o resultado esperado?
    5. Qual é a sequência de passos a ser feitas para chegar ao resultado esperado?

# Introdução a Algoritmos

O que é um algoritmo?

São uma sequência de passos a serem seguidos por um **módulo processador** e seus respectivos **usuários** que, quando executado na ordem correta, conseguem **realizar** determinada **tarefa**. Ou, encurtando, uma sequencia de passos que resolvem um problema.

Módulo processador → Tudo aquilo que pode ser programável e que pode efetuar processamento, computador, celular etc.

U**suários →** Quem **vai utilizar o programa.**

*Em outras palavras,* são o conjunto de passos, numa determinada ordem, que se utiliza para realizar uma determinada tarefa, como uma receita de bolos por exemplo. A baixo vou colocar um exemplo de algorítimo que utilizamos quando vamos atravessar a rua.

### Exemplo:

```bash
Algoritimo AtravessarRua
	Olhar para a direita
	Olhar para a esquerda
	Se estiver vindo carros
		Não atravesse
	Senão
		Atravesse
	fim-se
Fim-Algoritimo
```

### Vou dar um outro exemplo:

```bash
Algoritimo AtravessarRua
	Olhar para a esquerda
	Olhar para a direita
	Se não estiver vindo carros
		Atravesse
	Senão
		Não atravesse
	fim-se
Fim-Algoritimo
```

Esse exemplo também é um algoritmo, pois os passos estão organizados numa ordem lógica e conseguimos cumprir o objetivo que é atravessar a rua. Então a gente pode concluir que mesmo trocando a ordem é um algoritmo? Não, vou por outro exemplo.

```bash
Algoritimo AtravessarRua
	Atravessar
	Se tiver vindo carro
		Olhar para a direita
	senão 
		Olhar para a esquerda
	fim-se
	Não atravesse
Fim-Algoritimo
```

Esse claramente não é um algoritmo porque se você seguir isso na vida real pode morrer antes de fazer o segundo passo. Não existe nenhum tipo de ordem nele e isso faz com que o objetivo não seja alcançado.

Programas são criados para resolver algum problema, como fazer uma equação exponencial, por exemplo. E se você souber o padrão para resolver você consegue fazer um programa assim.

### Mas como fazer isso?

Pra criar um algoritmo computacional, você precisa primeiro criar uma lógica, depois passar ela para a linguagem e então isso vai resultar num software.

Para estruturar a lógica existem algumas ferramentas, são elas:

**Fluxograma**: Uma ferramenta utilizada para representar graficamente o algoritmo, isto é, a sequencia logica e coerente dos dados.

![image](https://user-images.githubusercontent.com/79476219/148702632-a1872078-3436-4ab4-b958-37ab7eb20eda.png)

**Nassi Shneiderma**: 

**Pseudo-código ou Portugol**: É a forma de escrever que é mais próxima da língua de quem escreve, por isso é o mais usado.
