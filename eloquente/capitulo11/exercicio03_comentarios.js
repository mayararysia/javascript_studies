//\s - espaço em branco
//* -zero ou mais ocorrências
//. - todos os caracteres, exceto espaços

function skipSpace(string) {
  var match = /^(#.*|\s)*/.exec(string);
  return string.slice(match[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {