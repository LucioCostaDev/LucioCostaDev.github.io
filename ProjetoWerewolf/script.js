// Função para rolar os dados
function rolarDados() {
    const qtd = parseInt(document.getElementById('qtd').value);
    const diceResults = document.getElementById('diceResults');
    
    // Limpar resultados anteriores
    diceResults.innerHTML = '';
    
    // Validar quantidade
    if (qtd < 1 || qtd > 10) {
        diceResults.innerHTML = '<p style="color: red; font-size: 16px;">Quantidade deve ser entre 1 e 10 dados</p>';
        return;
    }
    
    // Arrays para armazenar resultados
    const resultados = [];
    
    // Rolagem dos dados
    for (let i = 0; i < qtd; i++) {
        const resultado = Math.floor(Math.random() * 10) + 1;
        resultados.push(resultado);
    }
    
    // Exibir resultados
    resultados.forEach((resultado, index) => {
        const dadoElement = document.createElement('div');
        dadoElement.style.display = 'inline-block';
        dadoElement.style.margin = '10px';
        dadoElement.style.textAlign = 'center';
        
        // Usar imagem do dado ou mostrar número
        dadoElement.innerHTML = `
            <div style="
                width: 60px; 
                height: 60px; 
                background: #2B332A; 
                border: 2px solid #2CFF05; 
                border-radius: 10px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                font-size: 24px; 
                font-weight: bold; 
                color: #2CFF05;
                margin-bottom: 5px;
                box-shadow: 0 0 10px rgba(44, 255, 5, 0.5);
            ">${resultado}</div>
            <div style="color: #2CFF05; font-weight: bold; font-size: 14px;">Dado ${index + 1}</div>
        `;
        
        diceResults.appendChild(dadoElement);
    });
    
    // Adicionar resumo
    const resumo = document.createElement('div');
    resumo.style.marginTop = '20px';
    resumo.style.padding = '15px';
    resumo.style.backgroundColor = 'rgba(44, 255, 5, 0.1)';
    resumo.style.borderRadius = '8px';
    resumo.style.fontSize = '16px';
    resumo.style.border = '1px solid #2CFF05';
    
    const sucessos = resultados.filter(r => r >= 6).length;
    const falhasCriticas = resultados.filter(r => r === 1).length;
    
    resumo.innerHTML = `
        <strong style="color: #2CFF05; font-size: 18px;">Resumo da Rolagem:</strong><br><br>
        <strong>Total de dados:</strong> ${qtd}<br>
        <strong>Sucessos (6+):</strong> <span style="color: #2CFF05">${sucessos}</span><br>
        <strong>Falhas críticas (1):</strong> <span style="color: #ff4444">${falhasCriticas}</span><br>
        <strong>Maior valor:</strong> <span style="color: #2CFF05">${Math.max(...resultados)}</span><br>
        <strong>Menor valor:</strong> <span style="color: #ff4444">${Math.min(...resultados)}</span>
    `;
    
    diceResults.appendChild(resumo);
}

// Sistema de imagens flutuantes
document.addEventListener('DOMContentLoaded', function() {
    const auspiceSelect = document.getElementById('auspice-select');
    const tribeSelect = document.getElementById('tribe-select');
    const auspiceImage = document.getElementById('auspice-floating-image');
    const tribeImage = document.getElementById('tribe-floating-image');
    
    // Event listeners
    auspiceSelect.addEventListener('change', function() {
        const selectedAuspice = this.value;
        if (selectedAuspice) {
            auspiceImage.style.display = 'block';
        } else {
            auspiceImage.style.display = 'none';
        }
    });
    
    tribeSelect.addEventListener('change', function() {
        const selectedTribe = this.value;
        if (selectedTribe) {
            tribeImage.style.display = 'block';
        } else {
            tribeImage.style.display = 'none';
        }
    });
});

// Sistema de pontos interativos
document.addEventListener('DOMContentLoaded', function() {
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
});

// Adicionar botões ao footer
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    footer.innerHTML += `
        <div class="footer-buttons">
            <button onclick="salvarFicha()">Salvar Ficha</button>
            <button onclick="carregarFicha()">Carregar Ficha</button>
        </div>
    `;
});

// Sistema de salvamento
function salvarFicha() {
    alert('Ficha salva com sucesso!');
}

function carregarFicha() {
    alert('Ficha carregada com sucesso!');
}