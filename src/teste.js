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

arrayalunos.forEach(aluno =>{
    if(aluno.nota >= 6)
    console.log(aluno)
})






