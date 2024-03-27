const Funcionario = require('./funcionario');
const Departamento = require('./departamento');

const f1 = new Funcionario("Marcos", 1400.00);
const f2 = new Funcionario("Julia", 1650.00);
const f3 = new Funcionario("Pablo", 1500.00);

const d1 = new Departamento("Administração");
const d2 = new Departamento("Produção");
const d3 = new Departamento("Comunicação");

d1.adicionar(f1);
d1.adicionar(f2);
d2.adicionar(f3);
d3.adicionar(d1);
d3.adicionar(d2);

const salarioTotal = d3.getSalario();
console.log("Salário Final:", salarioTotal);