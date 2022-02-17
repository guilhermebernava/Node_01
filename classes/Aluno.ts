require("./interfaces/IAluno");


class Aluno implements IAluno{
  Nome: string;
  Nota: number;
  Idade: number;
  Turma: string;

  constructor(nome: string, nota: number, idade: number, turma: string) {
    this.Nome = nome;
    this.Idade = idade;
    this.Nota = nota;
    this.Turma = turma;
  }

  ColocarNome(nome:string): boolean{
       this.Nome = nome;
       return true
  }
}



