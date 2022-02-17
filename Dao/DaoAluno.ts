const Model = require("../models/aluno");
require("../classes/interfaces/IAluno");
require("../classes/interfaces/IResponse");
require("../classes/Responses");

class DaoAluno implements DaoAluno {
  async postAluno(aluno): Promise<Response> {
    try {
      const result = await Model.create(aluno);

      return new Response();
    } catch (e) {
      return new Response();
    }
  }

  async getAlunos() {
    try {
      const result = await Model.findAll();

      return result;
    } catch (e) {
      return;
    }
  }

  async getAlunoByTurma(turma: string) {
    try {
      const result = await Model.findOne({ where: { Turma: turma } });

      return result;
    } catch (e) {
      return;
    }
  }

  async putAluno(aluno): Promise<Response> {
    try {
      const result = await Model.update(
        { aluno },
        { where: { Nome: aluno.Nome, Idade: aluno.Idade, Nota: aluno.Nota } }
      );

      return result;
    } catch (e) {
      return;
    }
  }

  async deleteAluno(id: number): Promise<Response> {
    try {
      const result = await Model.update({ where: { Id: id } });

      return result;
    } catch (e) {
      return;
    }
  }
}

module.exports = () => { DaoAluno};
