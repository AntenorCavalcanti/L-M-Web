document.getElementById('cadastroBtn').addEventListener('click', async function () {
    const nome = document.getElementById('nomeInput').value.trim();
    const cpf = document.getElementById('cpfInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const senha = document.getElementById('senhaInput').value;
    const confirmarSenha = document.getElementById('confirmarSenhaInput').value;
  
    // Verificações básicas
    if (!nome || !cpf || !email || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }
  
    try {
      const resposta = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, cpf, senha })
      });
  
      const data = await resposta.text(); // ou .json() se o servidor retornar JSON
  
      if (resposta.ok) {
        alert(data); // ou data.message se for JSON
        // Redirecionar ou limpar os campos se quiser
      } else {
        alert('Erro ao cadastrar: ' + data);
      }
  
    } catch (erro) {
      console.error('Erro ao se conectar ao servidor:', erro);
      alert('Erro na conexão com o servidor.');
    }
  });
  