import express from "express"

const app = express();
const port = 3000

app.get("/api/:userId/pessoa/:personId", (req,res) => {
    const nome = req.query.nome
    const userId = req.params.userId
    const personId = req.params.personId

    res.json({ 
        message: 
        `Voce passou o queryParam : ${nome}, `+
        `routeParam userId: ${userId}, routeParam personId: ${personId}`,
    });
});

app.listen(port, () => {
    console.log(`App rodando na URL: "http://localhost:${port}/api/"`);
});

// comentario normal
//* comentario importante
//! corrigir
//todo a fazer
