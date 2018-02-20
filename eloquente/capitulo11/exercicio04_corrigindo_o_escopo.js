/*O método Object.getPrototypeOf() retorna o valor da propriedade interna [[Prototype]])
 do objeto especificado.

 O método hasOwnProperty() retorna um boolean indicando se o objeto 
 possui a propriedade especificada.*/

specialForms["set"] = function(args, env) {
	if (args.length != 2 || args[0].type != "word")
	    throw new SyntaxError("Bad use of set");

	var name = args[0].name;
	var value = evaluate(args[1], env);

	for (var scope_obj = env; scope_obj; scope_obj = Object.getPrototypeOf(scope_obj)) {
	
	  	if (Object.prototype.hasOwnProperty.call(scope_obj, name)) {
		    scope_obj[name] = value;
		    return value;
		}
	}
   throw new ReferenceError("Some kind of ReferenceError");	    

};

run("do(define(x, 4),",
"   define(setx, fun(val, set(x, val))),",
"   setx(50),",
"   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
