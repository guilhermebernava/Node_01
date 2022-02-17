const database = require("../Db/Db")
const {DataTypes} = require("sequelize")

const AlunoModel = database.define('Alunos', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Nome:{
    type: DataTypes.STRING,
  },
  Idade:{
    type: DataTypes.INTEGER,
  },
  Nota:{
    type: DataTypes.DOUBLE,
  },
  Turma:{
    type: DataTypes.STRING,
  }
})

module.exports = AlunoModel;