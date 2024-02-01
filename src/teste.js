const nome =""
const nota = 0

class Aluno {
    nome=nome;
    nota=nota;

    constructor(nomePessoa,notaPessoa){
        this.nome=nomePessoa
        this.nota=notaPessoa
    }
}

const joao= new Aluno("João",6)
const pedro=new Aluno("Pedro",4)
const maria=new Aluno("Maria",7)

const arrayalunos = [joao,pedro,maria]

console.log(arrayalunos)

const alunosAprovados = []

for(let i=0; i<arrayalunos.length;i++){
    if (i.nota >= 6){
        alunosAprovados += arrayalunos[i]
    }
    return alunosAprovados;
}
    

console.log(alunosAprovados)




