const express = require('express');
const cors = require('cors');
const pool = require('./js/db'); // importa a conexão
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/cadastro', async (req, res) => {
  const { nome, email, cpf, senha } = req.body;

  try {
    const sql = `
      INSERT INTO pessoas (nome, email, cpf, senha, situacao)
      VALUES (?, ?, ?, ?, 'AT')
    `;

    await pool.execute(sql, [nome, email, cpf, senha]);

    res.status(201).send('Cadastro realizado com sucesso!');
  } catch (err) {
    console.error(err);
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(400).send('Email ou CPF já cadastrado.');
    } else {
      res.status(500).send('Erro interno no servidor.');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
