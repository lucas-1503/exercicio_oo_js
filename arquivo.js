function Racas(tipo,bom_contra,mal_contra,cor){
    this.tipo = tipo;
    this.bom_contra = bom_contra;
    this.mal_contra = mal_contra;
    this.cor = cor;
}


const elfos = new Racas("elfos","orcs","undeads","amarelo");
const orcs = new Racas("orcs","undeads","elfos","verde");
const undeads = new Racas("undeads","elfos","orcs","preto");

function Personagem(nome, level, tipo) {
    this.nome = nome;
    this.level = level;

    if (tipo instanceof Racas) {
        Racas.call(this, tipo.tipo, tipo.bom_contra, tipo.mal_contra, tipo.cor);
    } else {
        Racas.call(this, tipo, "", "", ""); // Preencha os valores padrão conforme necessário
    }
}


const elfo1 = new Personagem("Joao",1,elfos)
const orc1 = new Personagem("maria", 10, orcs)
const und1 = new Personagem("Fernando",12,undeads)

console.log(elfo1)
console.log(orc1)
console.log(und1)
