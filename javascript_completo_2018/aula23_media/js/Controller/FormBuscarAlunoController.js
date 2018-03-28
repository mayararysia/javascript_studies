class FormBuscarAlunoController{
    //orquestra o model e a view 
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    
    /*função buscarAluno: pega o valor do input da view
    e delega pro model.*/
    buscarAluno(callback){
        var nome = this.view.$seletor.querySelector('input').value;
        var filtrados = this.model.buscarAlunos(nome);
        
        if(filtrados && typeof callback === 'function') callback(filtrados);        
    }
    
    limparInput(){
        this.view.$seletor.querySelector('input').value = '';
    }
}