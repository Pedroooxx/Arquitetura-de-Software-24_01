class Turma {
    constructor(codigo, nota) {
      this.codigo = codigo;
      this.nota = nota;
    }
  
    aprovado() {
        if(nota >= 7){
            return true
        }
        else{
            return false
        }
    }
  }
  
  module.exports = Turma;