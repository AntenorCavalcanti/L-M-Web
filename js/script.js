document.getElementById('cadastroBtn').addEventListener('click', function () {
  const nome = document.getElementById('nomeInput').value;
  const cpf = document.getElementById('cpfInput').value;
  const email = document.getElementById('emailInput').value;
  const senha = document.getElementById('senhaInput').value;

  // Enviando dados para o backend via fetch
  fetch('http://localhost:3000/cadastro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, cpf, email, senha })
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});

document.getElementById('loginBtn').addEventListener('click', function () {
  const email = document.getElementById('emailInput').value;
  const senha = document.getElementById('senhaInput').value;

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, senha })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login realizado com sucesso!');
        // Redirecionar, por exemplo:
        // window.location.href = '/HTML/home.html';
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});