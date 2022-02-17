require("../classes/interfaces/IAluno");
require("../classes/interfaces/IResponse");

interface IDaoAluno {
     postAluno: (aluno:IAluno) => Promise<IResponse>
     getAlunos: () => Promise<IAluno>
     getAlunoByTurma: (turma:string) => Promise<IAluno>
     putAluno: (aluno:IAluno) => Promise<IResponse>
     deleteAluno: (id:number) => Promise<IResponse>
}
