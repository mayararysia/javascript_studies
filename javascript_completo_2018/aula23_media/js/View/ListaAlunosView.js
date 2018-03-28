//cuida da apresentação do model
class ListaAlunosView extends View{
    //gera um html a partir da lista alunos.
    constructor(seletor){
        super(seletor);
    }
    /*getTemplate: vai receber o model e vai retornar o html
    //para cada aluno retorna uma tr*/
    getTemplate(model){
        return `
            ${model.lista.map( aluno => `
                <tr class="aluno" data-id="${aluno._id}">
                    <td class="aluno-nome">${aluno.nome}</td>
                    ${aluno._notas.map( (nota, i) => `
                        <td class="aluno-n${(i+1)}">${nota}</td>
                    ` ).join('')}
                    <td class="aluno-m">${aluno.recuperarMedia()}</td>
                </tr>
            `        
            ).join('')}
        `
    }
    
    //atualiza: espera receber o model
    atualiza(model){
        this.$seletor.innerHTML = this.getTemplate(model);
    }
}