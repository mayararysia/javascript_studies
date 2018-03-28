//cuida da apresentação do model
class View{
    constructor(seletor){
        this.$seletor = blg.$(seletor);
    }
    //as classes derivadas de View devem implementar o método getTemplate()
    getTemplate(){
        throw new Error ('O método getTemplate deve ser implementado pelas classes que herdam de View.');
    }
}