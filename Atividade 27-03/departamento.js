//Aluno: Pedro de Oliveira Machado - 2417855

const Componente = require('./componente');

class Departamento extends Componente {
    constructor(nome) {
        super();
        this.nome = nome;
        this.subDepartamento = [];
    }

    adicionar(subDepartamento) {
        this.subDepartamento.push(subDepartamento);
    }

    remover(subDepartamento) {
        const i = this.subDepartamento.indexOf(subDepartamento);

        if (i !== -1) {
            this.subDepartamento.splice(i, 1);
        }
    }

    getSalario() {
        let salarioTotal = 0;
        for (const subDepartamento of this.subDepartamento) {
            salarioTotal += subDepartamento.getSalario();
        }
        return salarioTotal;
    }
}

module.exports = Departamento;