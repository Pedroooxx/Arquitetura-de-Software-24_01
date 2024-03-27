//Aluno: Pedro de Oliveira Machado - 2417855

const Componente = require('./componente');

class Funcionario extends Componente {
    constructor(nome, salario) {
        super();
        this.nome = nome;
        this.salario = salario;
    }

    getSalario() {
        return this.salario;
    }
}

module.exports = Funcionario;