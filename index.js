import express from "express";
import { somar } from "./exercicios/um.js";
import { sub } from "./exercicios/dois.js";
import { div } from "./exercicios/tres.js";

const app = express();
app.use(express.json());
const port = 3000;

app.post("/api/exercicio", (req, res) => {
  const result = somar(req.body.num1, req.body.num2);
  res.status(200).json({
    message: `resultado: ${result}`,
  });
});

app.post("/api/exercicio2", (req, res) => {
  const result = sub(req.body.num1, req.body.num2);
  res.status(200).json({
    message: `resultado: ${result}`,
  });
});

app.post("/api/exercicio3", (req, res) => {
  const result = div(req.body.num1, req.body.num2);
  res.status(200).json({
    message: `resultado: ${result}`,
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
