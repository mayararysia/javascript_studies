//a lista de alunos:
var alunos = ["Daniel", "Maria", "José"];
//cada aluno tem a instância de Aluno:
alunos = alunos.map( aluno => new Aluno(aluno));

alunos[0].adicionarNotas(5,2,3,8);
alunos[1].adicionarNotas(5,10,3,8);
alunos[2].adicionarNotas(5,2,8,8);

var listaAlunos = new ListaAlunos(alunos);
console.log(listaAlunos);

var listaAlunosView = new ListaAlunosView('#listaAlunos');
listaAlunosView.atualiza(listaAlunos);
//na view (getTemplate) cria o método atualiza.

var listaAlunosController = new ListaAlunosController(listaAlunos, listaAlunosView);

var formAdicionarAlunoView = new FormAdicionarAlunoView('#form-adiciona');
var formAdicionarAlunoController = new FormAdicionarAlunoController(listaAlunos, formAdicionarAlunoView);

var formBuscarAlunoView = new FormBuscarAlunoView('#form-busca');
var formBuscarAlunoController = new FormBuscarAlunoController(listaAlunos, formBuscarAlunoView);

//framework: blg.$
blg.$('#form-adiciona form').addEventListener('submit', function(e){
    e.preventDefault();
    
    var nome = blg.$('#nome').value;
    
    var notas = [];
    var i = 1;
    while(blg.$('#nota'+i)){
        notas.push(parseFloat(blg.$('#nota'+i).value));//insere números
        i++;
    }
    
    listaAlunosController.adicionarAluno(nome, notas);    
    formAdicionarAlunoController.limpar();    
});

blg.$('#form-busca form').addEventListener('submit', function(e){
    e.preventDefault();
    formBuscarAlunoController.buscarAluno( function(_alunos) {
        console.log(_alunos);
        
        listaAlunosController.atualizaLista({lista: _alunos});
    });
});


blg.$('#btnLimparFiltro').addEventListener('click', function(e){
    formBuscarAlunoController.limparInput();
    listaAlunosController.limparFiltro();//atualiza a lista
});

