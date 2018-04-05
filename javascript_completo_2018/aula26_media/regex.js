/*
Expressões Regulares -Rgex https://regexr.com/


São padrões utilizados para encontrar, modificar ou validar 
determinados padroes em strings

começa com duas barras -> //

? - zero ou uma vez

+ -> uma ou mais vezes

*- 0 ou mais vezes

\d - de 0 à 9

{4} - 4 dígitos

{0,4} - mín e máximo

$ - termina

^ - começa

\w - caracterre qualquer

boundary : 

\b-limite -começa ou termina

\bato\w+ * /g

o pato tem sapato de gato xxatoyy ato atoxxx

/<h1.*?>/g  ==== <h1 id="id">

<h1 id="id">testes</h1>

\s = espaço

<h1.*?>[\s\w]+\/h1>/g  == <h1 id="id">testes</h1>

<(h[1-6]).*?>[\s\w]+\/\1>/g ==seleciona os h's iguais

<h1 id="id">teste</h1>
<h2 id="id">teste</h2>
<h1 id="id">teste</h2>

caracteres especiais: precisa ser inserido na expressão regular

<(h[1-6]).*?>[\s\wçáàéíóúã]+\/\1>/g

Há apenas um caso em que se utiliza regex com o construtor:
é quando  o valor da regex é dinânimo, qdo precisa usar a 
variável como expressão regular.

i-> ignore maiúsculas e minúsculas

*/