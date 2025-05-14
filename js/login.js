document.getElementById('loginBtn').addEventListener('click', async function () {
    const email = document.getElementById('emailInput').value;
    const senha = document.getElementById('senhaInput').value;
  
    try {
      const resposta = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
      });
  
      const data = await resposta.json();
  
      if (data.success) {
        alert('Login realizado com sucesso!');
        // Redirecionar ou fazer algo com o login
      } else {
        alert(data.message);
      }
  
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro na conexão com o servidor.');
    }
  });
  