/* high order functions: filter, map e reduce. Todos arrays tem. */

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mário", 23),
    novoAluno("Lucas", 28),
    novoAluno("Maria", 32),
    novoAluno("Angélica", 39),
]


function temMenosde30(aluno){
    return aluno.idade < 30
}

function temMaisde30(aluno){
    return aluno.idade > 30
}

/*function filtro(callback){

    let alunosFiltrados = [];
    for(let aluno of this){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }

    return alunosFiltrados;
}

alunos.filtro = filtro*/

console.log(alunos.filter(temMenosde30));
