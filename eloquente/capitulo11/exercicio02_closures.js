 run("do(define(f, fun(a, fun(b, +(a, b)))),",
    "print(f(4)(5)))");
    // → 9

/*foi utilizado o mecanismo de closure, fazendo com que uma função lembre do 
ambiente local em que ela foi criada.*/