const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const alunoRouter = require("../routes/aluno");

require("dotenv").config();
const PORT: number = parseInt(process.env.PORT as string, 10);

const options = {
     definition: {
         openapi: "3.0.0",
         info: {
               title: 'Guilherme API',
               version: '1.0.0',
               description: 'Teste Swagger e NodeJs'
         },
         servers: [
              {
                   url: "http://localhost:5000"
              }
         ],
     },
     apis: ["./routes/*.ts"]
}

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(cors());
app.use("/Alunos", alunoRouter);

app.listen(PORT, () => {});
