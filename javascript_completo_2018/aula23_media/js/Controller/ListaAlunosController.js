class ListaAlunosController{
    //orquestra o model e a view 
    constructor(model, view){
        this.model = model;
        this.view = view;        
        this.view.$seletor.addEventListener('click', this.editarAluno.bind(this));
    }
    
    editarAluno(e){
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(this);//é o controller
        //this - não é mais o objeto, é o elemento ao qual foi atrelado o evento
        
        let target = e.target;
        
        while(target !== e.currentTarget){
            if (target.getAttribute('data-id')) break;            
            target = target.parentNode;//é a tr
        }
        console.log('----');
        console.log(target);//é a tr
        
        if(target){
            let _id = parseInt(target.getAttribute('data-id'));
            let _notas = prompt('Digite as novas notas separadas por vírgula: ');
            
            if(!_notas) return;
            //split para transformar em array
            _notas = _notas.split(',').map(nota => parseFloat(nota));
            console.log(_notas);
            
            let aluno = this.model.obterPorId(_id);
            aluno.atualizarNotas(_notas);
            
            this.view.atualiza(this.model);
        }
    }
    
    adicionarAluno(nome, notas){
        this.model.adicionarAluno(new Aluno(nome, notas));
        this.view.atualiza(this.model);
    }
    
    atualizaLista(alunos){
        this.view.atualiza(alunos);
        //chama método 'atualiza' da view
    }
    
    limparFiltro(){
        this.view.atualiza(this.model);
    }
}