// ==================== CONFIGURAÇÃO DAS IMAGENS ====================

// CONFIGURE AQUI OS CAMINHOS DAS IMAGENS DOS DADOS
const diceImages = {
    1: 'imagens/Dice/dado1.png',
    2: 'imagens/Dice/dado2.png', 
    3: 'imagens/Dice/dado3.png',
    4: 'imagens/Dice/dado4.png',
    5: 'imagens/Dice/dado5.png',
    6: 'imagens/Dice/dado6.png',
    7: 'imagens/Dice/dado7.png',
    8: 'imagens/Dice/dado8.png',
    9: 'imagens/Dice/dado9.png',
    10: 'imagens/Dice/dado10.png'
};

// CONFIGURE AQUI OS CAMINHOS DAS IMAGENS DE AUSPÍCIOS E TRIBOS
const imageMap = {
    // AUSPÍCIOS
    'ragabash': 'imagens/Auspice/Ragabash.png',
    'theurge': 'imagens/Auspice/Theurge.png', 
    'philodox': 'imagens/Auspice/Philodox.png',
    'galliard': 'imagens/Auspice/Galliard.png',
    'ahroun': 'imagens/Auspice/Ahroun.png',
    
    // TRIBOS
    'Andarilhos do Asfalto': 'imagens/Tribe/Andarilhos do Asfalto.png',
    'Conselho dos Fantasmas': 'imagens/Tribe/Conselho dos Fantasmas.png',
    'Espreitadores do Vento': 'imagens/Tribe/Espreitadores do Vento.png',
    'Filhos de Gaia': 'imagens/Tribe/Filhos de Gaia.png',
    'Fúrias Negras': 'imagens/Tribe/Fúrias Negras.png',
    'Garras Vermelhas': 'imagens/Tribe/Garras Vermelhas.png',
    'Guardadores do Galhado': 'imagens/Tribe/Guardadores do Galhado.png',
    'Peregrinos Silenciosos': 'imagens/Tribe/Peregrinos Silenciosos.png',
    'Presas de Prata': 'imagens/Tribe/Presas de Prata.png',
    'Roedores de Ossos': 'imagens/Tribe/Roedores de Ossos.png',
    'Senhores das Sombras': 'imagens/Tribe/Senhores das Sombras.png'
};

// ==================== SISTEMA DE IMAGENS FLUTUANTES ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Iniciando sistema de imagens...');
    
    const auspiceSelect = document.getElementById('auspice-select');
    const tribeSelect = document.getElementById('tribe-select');
    const auspiceImage = document.getElementById('auspice-floating-image');
    const tribeImage = document.getElementById('tribe-floating-image');

    // Verificar se os elementos existem
    if (!auspiceSelect || !tribeSelect || !auspiceImage || !tribeImage) {
        console.error('❌ Elementos não encontrados! Verifique os IDs no HTML.');
        return;
    }

    // Event listener para Auspício
    auspiceSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        console.log('🎭 Auspício selecionado:', selectedValue);
        
        if (selectedValue && imageMap[selectedValue]) {
            console.log('📁 Carregando imagem:', imageMap[selectedValue]);
            auspiceImage.src = imageMap[selectedValue];
            auspiceImage.style.display = 'block';
            auspiceImage.alt = selectedValue;
            
            // Verificar se a imagem carrega corretamente
            auspiceImage.onload = function() {
                console.log('✅ Imagem do auspício carregada com sucesso!');
            };
            auspiceImage.onerror = function() {
                console.error('❌ Erro ao carregar imagem do auspício:', imageMap[selectedValue]);
                auspiceImage.style.display = 'none';
            };
        } else {
            console.log('📭 Nenhum auspício selecionado ou imagem não encontrada');
            auspiceImage.style.display = 'none';
        }
    });

    // Event listener para Tribo
    tribeSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        console.log('🏹 Tribo selecionada:', selectedValue);
        
        if (selectedValue && imageMap[selectedValue]) {
            console.log('📁 Carregando imagem:', imageMap[selectedValue]);
            tribeImage.src = imageMap[selectedValue];
            tribeImage.style.display = 'block';
            tribeImage.alt = selectedValue;
            
            // Verificar se a imagem carrega corretamente
            tribeImage.onload = function() {
                console.log('✅ Imagem da tribo carregada com sucesso!');
            };
            tribeImage.onerror = function() {
                console.error('❌ Erro ao carregar imagem da tribo:', imageMap[selectedValue]);
                tribeImage.style.display = 'none';
            };
        } else {
            console.log('📭 Nenhuma tribo selecionada ou imagem não encontrada');
            tribeImage.style.display = 'none';
        }
    });
    
    // Adicionar campo de dificuldade
    const diceBox = document.querySelector('.dice-box');
    if (diceBox) {
        diceBox.innerHTML = `
            <h2>🎲 Jogada de Dados</h2>
            <div class="dice-controls">
                <div class="dice-control-group">
                    <label for="qtd">Quantidade de Dados</label>
                    <input type="number" id="qtd" min="1" max="20" value="5">
                </div>
                <div class="dice-control-group">
                    <label for="dificuldade">Dificuldade</label>
                    <input type="number" id="dificuldade" min="2" max="10" value="6">
                </div>
            </div>
            <button onclick="rolarDados()">🎯 Rolar Dados!</button>
            <div class="dice-results" id="diceResults"></div>
        `;
    }
    
    // Sistema de pontos interativos
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const dotGroup = this.parentElement;
            const dotsInGroup = dotGroup.querySelectorAll('.dot');
            const clickedIndex = Array.from(dotsInGroup).indexOf(this);
            
            if (this.classList.contains('filled')) {
                for (let i = clickedIndex; i < dotsInGroup.length; i++) {
                    dotsInGroup[i].classList.remove('filled');
                }
            } else {
                for (let i = 0; i <= clickedIndex; i++) {
                    dotsInGroup[i].classList.add('filled');
                }
                for (let i = clickedIndex + 1; i < dotsInGroup.length; i++) {
                    dotsInGroup[i].classList.remove('filled');
                }
            }
        });
    });
    
    console.log('✅ Sistema de imagens configurado!');
});

// ==================== SISTEMA DE DADOS COM IMAGENS ====================

function rolarDados() {
    const qtd = parseInt(document.getElementById('qtd').value);
    const dificuldade = parseInt(document.getElementById('dificuldade').value) || 6;
    const diceResults = document.getElementById('diceResults');
    
    // Limpar resultados anteriores
    diceResults.innerHTML = '';
    
    // Validar quantidade
    if (qtd < 1 || qtd > 20) {
        diceResults.innerHTML = '<p style="color: red; font-size: 16px;">❌ Quantidade deve ser entre 1 e 20 dados</p>';
        return;
    }
    
    if (dificuldade < 2 || dificuldade > 10) {
        diceResults.innerHTML = '<p style="color: red; font-size: 16px;">❌ Dificuldade deve ser entre 2 e 10</p>';
        return;
    }
    
    // Arrays para armazenar resultados
    const resultados = [];
    const tiposResultado = [];
    
    // Rolagem dos dados
    for (let i = 0; i < qtd; i++) {
        const resultado = Math.floor(Math.random() * 10) + 1;
        resultados.push(resultado);
        
        // Determinar tipo do resultado
        if (resultado === 1) {
            tiposResultado.push('critical');
        } else if (resultado >= dificuldade) {
            tiposResultado.push('success');
        } else {
            tiposResultado.push('failure');
        }
    }
    
    // Exibir resultados dos dados COM IMAGENS
    const diceDisplay = document.createElement('div');
    diceDisplay.className = 'dice-roll-display';
    
    resultados.forEach((resultado, index) => {
        const diceElement = document.createElement('div');
        diceElement.className = 'dice-result-item';
        
        // Tentar usar imagem do dado
        const diceImg = document.createElement('img');
        diceImg.src = diceImages[resultado] || `imagens/Dice/dado${resultado}.png`;
        diceImg.alt = `Dado ${resultado}`;
        diceImg.className = `dice-image ${tiposResultado[index]}`;
        
        // Fallback se a imagem não carregar
        diceImg.onerror = function() {
            console.error('❌ Imagem do dado não encontrada:', diceImg.src);
            // Mostrar número como fallback
            const fallbackDiv = document.createElement('div');
            fallbackDiv.className = `dice-value ${tiposResultado[index]}`;
            fallbackDiv.textContent = resultado;
            diceElement.appendChild(fallbackDiv);
            diceImg.remove();
        };
        
        const diceNumber = document.createElement('div');
        diceNumber.style.cssText = 'color: #2CFF05; font-size: 12px; margin-top: 5px;';
        diceNumber.textContent = `D${index + 1}`;
        
        diceElement.appendChild(diceImg);
        diceElement.appendChild(diceNumber);
        diceDisplay.appendChild(diceElement);
    });
    
    diceResults.appendChild(diceDisplay);
    
    // Calcular estatísticas
    const sucessos = resultados.filter(r => r >= dificuldade).length;
    const falhasCriticas = resultados.filter(r => r === 1).length;
    const sucessosLiquidos = Math.max(0, sucessos - falhasCriticas);
    
    // Adicionar resumo
    const resumo = document.createElement('div');
    resumo.className = 'dice-summary';
    
    resumo.innerHTML = `
        <h3>📊 Resumo da Rolagem</h3>
        <div class="summary-grid">
            <div class="summary-item">
                <span class="summary-label">Dificuldade</span>
                <div class="summary-value">${dificuldade}+</div>
            </div>
            <div class="summary-item">
                <span class="summary-label">Sucessos</span>
                <div class="summary-value" style="color: #00ff00">${sucessos}</div>
            </div>
            <div class="summary-item">
                <span class="summary-label">Falhas Críticas</span>
                <div class="summary-value" style="color: #ff4444">${falhasCriticas}</div>
            </div>
            <div class="summary-item">
                <span class="summary-label">Sucessos Líquidos</span>
                <div class="summary-value" style="color: #2CFF05">${sucessosLiquidos}</div>
            </div>
            <div class="summary-item">
                <span class="summary-label">Maior Valor</span>
                <div class="summary-value">${Math.max(...resultados)}</div>
            </div>
            <div class="summary-item">
                <span class="summary-label">Menor Valor</span>
                <div class="summary-value">${Math.min(...resultados)}</div>
            </div>
        </div>
        <div style="margin-top: 15px; font-size: 14px; color: #ccc;">
            <strong>Legenda:</strong> 
            <span style="color: #00ff00">■ Sucesso</span> | 
            <span style="color: #ff4444">■ Falha Crítica</span> | 
            <span style="color: #ffaa00">■ Crítico</span>
        </div>
    `;
    
    diceResults.appendChild(resumo);
}

// ==================== SISTEMA DE SALVAMENTO ====================

function salvarFicha() {
    const fichaData = {
        nome: document.querySelector('input[placeholder="Nome do personagem"]').value,
        conceito: document.querySelector('input[placeholder="Conceito do personagem"]').value,
        patrono: document.querySelector('input[placeholder="Patrono"]').value,
        cronica: document.querySelector('input[placeholder="Crônica"]').value,
        auspice: document.getElementById('auspice-select').value,
        tribe: document.getElementById('tribe-select').value,
        // Adicionar pontos posteriormente
    };
    
    localStorage.setItem('fichaLobisomem', JSON.stringify(fichaData));
    alert('🎉 Ficha salva com sucesso!');
}

function carregarFicha() {
    const fichaSalva = localStorage.getItem('fichaLobisomem');
    if (fichaSalva) {
        const fichaData = JSON.parse(fichaSalva);
        
        document.querySelector('input[placeholder="Nome do personagem"]').value = fichaData.nome || '';
        document.querySelector('input[placeholder="Conceito do personagem"]').value = fichaData.conceito || '';
        document.querySelector('input[placeholder="Patrono"]').value = fichaData.patrono || '';
        document.querySelector('input[placeholder="Crônica"]').value = fichaData.cronica || '';
        document.getElementById('auspice-select').value = fichaData.auspice || '';
        document.getElementById('tribe-select').value = fichaData.tribe || '';
        
        // Atualizar imagens
        if (fichaData.auspice) {
            document.getElementById('auspice-select').dispatchEvent(new Event('change'));
        }
        if (fichaData.tribe) {
            document.getElementById('tribe-select').dispatchEvent(new Event('change'));
        }
        
        alert('📂 Ficha carregada com sucesso!');
    } else {
        alert('❌ Nenhuma ficha salva encontrada.');
    }
}

function imprimirFicha() {
    window.print();
}

// ==================== TOPO FIXO - APENAS IMAGEM ====================

document.addEventListener('DOMContentLoaded', function() {
    // Criar elemento do topo fixo
    const topoFixo = document.createElement('div');
    topoFixo.className = 'topo-fixo';
    
    // Apenas a imagem, sem conteúdo de texto
    topoFixo.innerHTML = ''; // Vazio - só a imagem do CSS
    
    // Adicionar o topo fixo como primeiro elemento do body
    document.body.insertBefore(topoFixo, document.body.firstChild);
    
    // Função para voltar ao topo suavemente
    topoFixo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('✅ Topo fixo (apenas imagem) configurado!');
});

  // Pegar o input de nome e atualizar o span no meio das imagens
  document.getElementById("nome").addEventListener("input", function() {
    document.getElementById("nomeCentral").textContent = this.value.toUpperCase();
  });

  // ação dado para o final da página
  const dado = document.getElementById('dado');

dado.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});