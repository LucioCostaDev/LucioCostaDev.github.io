// Função para salvar a ficha no localStorage
function salvarFicha() {
    const ficha = {
      forca: document.querySelector('input[name="forca"]:checked')?.value || 0,
      destreza: document.querySelector('input[name="destreza"]:checked')?.value || 0,
      vigor: document.querySelector('input[name="vigor"]:checked')?.value || 0,
      prontidao: document.querySelector('input[name="prontidao"]:checked')?.value || 0,
      luta: document.querySelector('input[name="luta"]:checked')?.value || 0,
      raiva: document.querySelector('input[name="raiva"]:checked')?.value || 0,
      gnose: document.querySelector('input[name="gnose"]:checked')?.value || 0,
    };
    localStorage.setItem('fichaWerewolf', JSON.stringify(ficha));
    alert('Ficha salva com sucesso!');
  }

  // Função para carregar a ficha do localStorage
  function carregarFicha() {
    const fichaSalva = localStorage.getItem('fichaWerewolf');
    if (fichaSalva) {
      const ficha = JSON.parse(fichaSalva);
      for (const [key, value] of Object.entries(ficha)) {
        const radio = document.querySelector(`input[name="${key}"][value="${value}"]`);
        if (radio) radio.checked = true;
      }
      alert('Ficha carregada com sucesso!');
    } else {
      alert('Nenhuma ficha encontrada.');
    }
  }

  // Função para rolar dados
  function rolarDados() {
    const quantidade = parseInt(document.getElementById('dados').value);
    const resultados = [];
    let sucessos = 0;

    for (let i = 0; i < quantidade; i++) {
      const resultado = Math.floor(Math.random() * 10) + 1;
      resultados.push(resultado);
      if (resultado >= 6) sucessos++; // Dificuldade padrão de 6
    }

    document.getElementById('resultadoRolagem').innerText = `Resultados: ${resultados.join(', ')} | Sucessos: ${sucessos}`;
  }