import express from "express"
import { somar, subtrair } from "./exercicios/todos.js";

const app = express(); 
app.use(express.json());

const port = 3000

app.get("/api/exercicio1", (req,res) => {
    const num10 = parseFloat(req.query.num1);
    const num20 = parseFloat(req.query.num2);

    res.json({ 
        message: 
        `Numero 1 : ${num1}, Numero 2 : ${num2}`,
    });
});

app.post("/api/exum", (req,res) => {

    const result = somar();
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    res.json({ 
        message: 
        `Resultado : ${num1 + num2}`,
    });
});

app.post("/api/exdois", (req,res) => {

    const result = somar();
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    res.json({ 
        message: 
        `Resultado : ${num1 + num2}`,
    });
});

app.listen(port, () => {
    console.log(`App rodando na URL: "http://localhost:${port}/api/"`);
});

// comentario normal
//* comentario importante
//! corrigir
//todo a fazer
