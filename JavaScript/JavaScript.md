# Características

## Linguagem interpretada

Não precisa ser compilada, é executada de cima pra baixo e o resultado aparece normalmente.

## Linguagem de tipagem fraca e dinâmica

Fraca → Não a verificação em todas as operações, então dá pra usar o + como uma string ou número sem que de erro.

Dinâmica → Não precisa declarar o tipo da variável antes de inserir um valor, pode criar e inserir valor normalmente, porque o compilador vai saber o tipo, também é possível trocar o tipo da variável ao longo do código sem maiores problemas.

## Baseada em Protótipos

É uma base para algumas estruturas de dados no Js.

## Multiparadigma

Você pode escolher se quer trabalhar com  orientação a objetos, programação funcional ou estruturada. Ou seja, é uma linguagem muito flexível

## Segue o padrão ecmascript

## Mais utilizada em front

## Currying

(não entendi bem, vou pesquisar depois)

## Hoisting

O JavaScript move todas as declarações de variáveis e de funções para o topo do seu código. Pode também atribuir um valor pra uma variável antes de declarar ela.

## Imutabilidade

```jsx
// Escopo Global
{
	// Escopo de bloco
}

function teste() {
	// Escopo da função
}

```

# Comentários em JS

// Para comentários de uma linha

/**/ Para comentários com mais de uma linha

# Tipos e variáveis

Exitem três modos de declarar variáveis em JS são elas:

- **var** → Tem escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null.
- **let** → Respeita o escopo de bloco (local), ou seja, um ele só vai existir dentro da função.
- **const** → Respeita o escopo de bloco (local), ou seja, ele só vai existir dentro da função. Não pode alterar valor, mas se for um objeto pode alterar propriedade. Por questão de boas praticas recebem nome com letras maiúsculas, para diferenciar das outras.

## Escopo

**Escopo global →** É quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

**Escopo local →** Quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

## Regras

- Inicie com letras, underscore _ ou cifrão $, mas não com números
Ex.: var 1nome ❌
var nome // var _nome ☑️
- Não usar espaços (use o camelCase ou *)
Ex.: var nome completo ❌
var nomeCompleto // var nome_completo* ☑️
- Não usar palavras reservadas (palavras utilizadas pela linguagem)
Ex.: var function ❌
- Declare as variáveis no topo do bloco de código

## Atribuição

- = Para atribuições
- += Faz a operação e atribui
- *= Faz a operação e atribui
- /= Faz a operação e atribui
- %= Faz a operação e atribui

# Operadores

## Aritméticos

- + adição
- - subtração
- * multiplicação
- / divisão real
- % divisão inteira (módulo)
- ** potenciação
- ++ incrementar (adicionar 1)
- - - decrementar (diminuir 1)

## Relacionais/Comparação

- == igual a
- === mesmo valor e mesmo tipo
- ! = diferente
- ! == valor e tipos diferentes
- > maior que
- < menor que
- >= maior ou igual a
- <= menor ou igual a

## Lógicos

- && - e - considera que todos os valores sejam true
- || - ou - considera que qualquer valor seja true
- ! - não - inverte o valor de true para false ou

## IF ternário

(Explicado melhor mais abaixo)

# Variáveis

Boas práticas:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/16dda0b7-b4a5-4d26-8d6a-c7c30e5f6d16/Untitled.png)

## Var e let

Ambas com Camel Case, via de regra é melhor usar sempre o let, pois é mais seguro já que é de escopo global.

Var → Tem escopo global ou local, tem o hoisting e pode ser redeclarado ou reatribuir.

let → Tem escopo local, não tem hoisting, não pode ser redeclarado, pode ser reatribuido. 

## Constantes

Declarada em Upper Case Snake Case, tem escopode de bloco e não faz hoisting, não pode ser redeclarada nem reatribuida.

# Tipos

## Estruturas de dados

São divididos entre dados primitivos e não primitivos.

Primitivos → Numbers, strings, boolean, null e undefined.

Não primitivos → Objects e arrays.

Com o typeof da pra descobrir qual o tipo.

## Strings

É utilizada para texto, valores declarados entre aspas oucrases.

Quebra 1 uma linha “\n”

métodos: 

- **Length →** Retornará o tamanho total da string. (Tamanho sempre começa com 1)
- **indexOf e lastIndexOf →** Tanto o método indexOf quanto o lastIndexOf retornam a primeira posição de um determinado pedaço dentro de uma string, porem o indexOf retorna a primeira ocorrência e o lastIndexOf retorna a ultima.
- **search →** Igual ao indexOf.
- **slice →** Extrai uma parte da string e retorna a parte extraída em uma nova string. Utiliza dois parâmetros, índice inicial (posição), e o índice final (posição). Os índices podem ser negativos, assim ele começará a contar de trás pra frente. E também dá pra omitir o último parâmetro.
- **replace →** substitui um determinado valor em uma string por outro valor.
- **toUpperCase e toLowerCase →** Transforma em maiúscula e minúscula, respectivamente.
- **concat →** Agrupa 2 ou mais strings.
- **split →** Separa os argumentos de uma string. Pode converter em array.

/*Tem mais métodos*/

## Numbers

Existe uma biblioteca chamada Math, ela possibilita utilizar vários métodos.

## Booleans

Ou é verdadeiro ou é falso (true or false).
Com o método toString, é possivel transformar o resultado em string.

## Arrays (Vetores)

Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos. 

É como uma caixa com várias outras caixas dentro e cada uma contendo algum valor.

**Estrutura → let array = [’string’, 1, true....]**

Deve ser declarado entre colchetes “[]”, e pode guardar qualquer valor dentro de seus índices: incluindo outros arrays

obc.: O índice só é acessado por um número inteiro, onde 0 é o primeiro índice. Cada índice é separado por vírgula.

## Manipulando arrays

- forEach() → itera um array
- push() → adiciona item no final do array
- pop() → remove item no final do array
- shift() → remove item no início do array
- unshift() → adiciona item no início do array
- indexOf() → retorna o índice de um valor
- splice() → remove ou substitui um item pelo índice
- slice() → retorna uma parte de um array existente

## Objetos

Dados que possuem **propriedades** e **valores** que definem suas características. Deve ser declarado entre chaves “{}”. Para criar um objeto geralmente começa com sua definição e inicialização de uma veriável.

Ex.: Pessoa, uma pessoa tem muitas caracteristicas, nome, idade, altura etc.

```jsx
var pessoa = {
  nome: ['Bob', 'Smith'],
  idade: 32,
  sexo: 'masculino',
  interesses: ['música', 'esquiar'],
  bio: function() {
    alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
  },
  saudacao: function() {
    alert('Oi! Eu sou ' + this.nome[0] + '.');
  }
};

```

## Empty, null e undefined

Empty → É quando se declara uma variável mas não possuem nenhum valor dentro.

null → Quando se quer que o valor não exista, propositalmente.

undefined → Nem chegou a ser declarada.

# Estruturas condicionais

São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição;
Ex.: Um jogo precisa mudar o placar toda vez que um jogador mar pontuação.

```jsx
var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0){
	console.log('Jogador 1 marcou ponto!');
} else if (jogador2 > 0){
	console.log('Jogador 2 marcou ponto!');
} else {
	console.log('Ninguém marcou ponto!');
}
```

## Ninho de if

Quando se tem mais de uma condição if, elas podem ser aninhadas com outras, como no exemplo acima. E o correto é colocar um espaço depois entre o else e o if, porque não existem um “elseif”.

## If ternário

Fazer uma verificação em uma única linha, mas tem não pode esquecer de usar a interrogação “?” e dois pontos “:”, na estrutura.

O código ficaria assim:

```jsx
var jogador1 = 0;
var jogador2 = 0;
var placar;

Jogador1 (diferente) -1 && jogador2 (diferente) -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');
```

## Switch/case

Também é uma estrutura condicional, só um pouco diferente, e sempre se deve usar o brak para para a instrução porque se não ele vai ficar em loop infinito.

```jsx
switch(placar){
	case placar = jogador1 > jogador2:
		console.log('jogador 1 ganhou!');
		break;
	case placar = jogador2 > jogador1:
		console.log('Jogador 2 gannhou!');
		break;
default: 
		console.log('Ninguém ganhou!');
}
```

# Laços de repetição

## For

O FOR é usado para repetição de uma instrução até que a condição seja falsa.

**Sintaxe:**

**for**([expressaoInicial]; [condicao]; [incremento]){
declaracao
}

## For/in

Usado como uma repetição a partir de uma propriedade.

**Sintaxe:**

**for**([indice] in [objeto ou array]){
declaracao
}

## For/of

É usado para repetições a partir de um valor. Pode ser usado com objetos, porém não funciona corretamente pois as propriedades variam, diferente do índice em um array que sempre serão números inteiros.

**Sintaxe:**

**for**([indice] of [array]){
   declaração
}

## While

Executa uma instrução “enquanto” determinada condição for verdadeira, a verificação é feita antes da execução.
**Ex.: var** a = 0;
       **while**(a < 10){
                   a++;
                   console.log(a);
}

Como se ler: Enquanto a variável **a** for menor que 10, ela vai receber mais um e imprimir no cosole.

## Do/While

Executa uma instrução “até que” determinada condição seja falsa, a verificação é feita depois da execução.

**Ex.: var** a = 0;
        **do**{
                a++;
                console.log(a);
} **while (**a < 10**)**

Como se ler: A variável **a vai receber mais um e imprimir no console até que seu valor chegue a 10.**

# Funções

## O que é?

São blocos de comandos e instruções para execução de determinadas tarefas:

**Sintaxe:**

function nomeDaFuncao(){
      ${instrução};
}
nomeDaFuncao();

() - indica que é um objeto do tipo function

{} - indica que é um bloco de instrução

## Funções autoinvocável

Um a função anônima entre parênteses, seguida por outro par de parênteses, que representam sua chamada. Também pode ser usada com parâmetros.

## Funções declarativas

São funções que possuem o uso mais comum, como no exemplo acima, lembrando que o nome da função é obrigatório.

## Expressões de funções

São funções atribuídas à expressões. Colocar nome nelas é opcional.

**Ex 1.: var** funcao = **function** **nomeDaFuncao**(){
      ${instrução}
} 

**Ex 2 .: var funcao = function(){**
      ${instrução}
**}**

## Formas de tratar

**Spread → É uma forma de lidar separadamente com elementos. O que era parte de um array, se torna um elemento independente.**

Ex.: 

```jsx
function sum(x, y, z){
	return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers))
```

**Rest →** Combina os argumentos em um array. O que era um elemento independente se torna parte de um array.

```jsx
function confereTamanho(..args){
	console.log(args.length)
}
```

## Objetc Destructuring

Entre chaves {}, poedmos filtrarr apenas dados que nos interessam em um objeto.

## Arrow function

São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. Deve ser declarada com (), seguido de ⇒ e depois {}.

**Sintaxe:**

**var** funcao = () ⇒ {
               ${instrucao}
}

# This

## O que é?

É uma referencia de contexto. Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

## Adicionando js no html

adicionando a tag <script src=”caminho do arquivo”></script>

Obs.: Na maioria dos projetos o JS é colocado no body por último, depois de todo o código escrito, porque o arquivo é lido de cima pra baixo, então se colocado antes pode dar falha na renderização da página etc. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb431178-fc59-4b4a-95a3-6162b807b159/Untitled.png)

## Métodos

**call →** Coloca o objeto ao qual o this vai se referido.

**Apply →** 

# DOM ou Arvóre DOM

DOM ou Document Object Model, é as estrutura dos elementos dentro da janela. Sabendo dela você pode utilizar o js para manipular os elementos da página.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f56fa1fb-6f78-44c2-b96c-24b86bdeb95a/Untitled.png)

Obs.: Importante lembrar que, se quiser a tag h1 por exemplo, e escrever Element com s, ele vai procurar por todos os h1, se quiser apenas um elemento, não se deve colocar o s.

getElementsByTagName → Seleciona todas as tags que foi pedida.

## AddEventListener (Eventos)

Estrutura → elemento.addEventListener(”evento”,função);
