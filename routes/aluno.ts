const expres = require("express")
const router = expres.Router();
const RepositoryAluno: DaoAluno = require("../Dao/DaoAluno.ts")

router.get("/", (req,res) => {
     const alunos = RepositoryAluno.getAlunos()
     res.send(alunos);
})

router.get("/:turma", (req,res) => {
     const alunos = RepositoryAluno.getAlunoByTurma(req.params.turma)
     res.send(alunos);
})

router.post("/", (req,res) => {
     const aluno = RepositoryAluno.postAluno(req.body)
     res.send(aluno);
})

router.put("/", (req,res) => {
     const aluno = RepositoryAluno.putAluno(req.body)
     res.send(aluno);
})

router.delete("/:id", (req,res) => {
     const aluno = RepositoryAluno.deleteAluno(req.params.id)
     res.send(aluno);
})

module.exports = router;