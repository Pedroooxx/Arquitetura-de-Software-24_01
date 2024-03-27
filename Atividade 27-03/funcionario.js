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