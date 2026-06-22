const dadosDoAluno = require('./aluno.json');

console.log("--- Sistema escolar ---");

console.log(`Nome: ${dadosDoAluno.nome}`);
console.log (`Curso: ${dadosDoAluno.curso}`);
console.log(`Idade: ${dadosDoAluno.idade}`)
if (dadosDoAluno.bolsista) {
    console.log("Status: Este aluno possui 60% de desconto do curso.");
} else {
    console.log("Status: Mensalidade padrão.");
};
