#JavaScript

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

O JavaScript move todas as declarações de variáveis e de funções para o topo do seu código.

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

Variáveis

- var →
- let → Respeita o escopo de bloco, ou seja, um ele só vai existir dentro da função.
- const → Respeita o escopo de bloco, ou seja, ele só vai existir dentro da função. Não pode alterar valor, mas se for um objeto pode alterar propriedade. Por questão de boas praticas recebem nome com letras maiúsculas, para diferenciar das outras.

## Adicionando js no html

adicionando a tag <script src=”caminho do arquivo”></script>

Obs.: Na maioria dos projetos o JS é colocado no body por último, depois de todo o código escrito, porque o arquivo é lido de cima pra baixo, então se colocado antes pode dar falha na renderização da página etc. 

# DOM ou Arvóre DOM

DOM ou Document Object Model, é as estrutura dos elementos dentro da janela. Sabendo dela você pode utilizar o js para manipular os elementos da página.

![image](https://user-images.githubusercontent.com/79476219/148702531-485b7451-6d52-450f-bda2-ea2a148357ae.png)

Obs.: Importante lembrar que, se quiser a tag h1 por exemplo, e escrever Element com s, ele vai procurar por todos os h1, se quiser apenas um elemento, não se deve colocar o s.

getElementsByTagName → Seleciona todas as tags que foi pedida.

## AddEventListener (Eventos)

Estrutura → elemento.addEventListener(”evento”,função);
