import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) =>
res.send('Rota ativada com GET e recurso Página principal: Valores de Página principal devem ser retornados')
);

app.get('/tarefas', (req, res) =>
res.send('Rota ativada com GET e recurso Tarefas: Valores de Tarefas devem ser retornados')
);

app.get('/pessoas', (req, res) =>
res.send('Rota ativada com GET e recurso Pessoas: Valores de Pessoas devem ser retornados')
);

app.get('/diadasemana', (req, res) =>
res.send('Rota ativada com GET e recurso Dia da Semana: Valores de Dia da Semana devem ser retornados')
);

app.listen(`${port}`, () =>
console.log(`Servidor iniciado na porta ${port}`)
);