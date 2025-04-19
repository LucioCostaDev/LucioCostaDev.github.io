// Configuração das imagens - ATUALIZE ESTES CAMINHOS COM SUAS IMAGENS REAIS
const auspiceImages = {
    'Ragabash': 'imagens/auspices/ragabash.png',
    'Theuge': 'imagens/auspices/theuge.png',
    'Philodox': 'imagens/auspices/philodox.png',
    'Galliard': 'imagens/auspices/galliard.png',
    'Ahroun': 'imagens/auspices/ahroun.png'
  };
  
  const tribeImages = {
    'Black Furies': 'imagens/tribes/black_furies.png',
    'Bone Gnawers': 'imagens/tribes/bone_gnawers.png',
    'Children Gai': 'imagens/tribes/children_gai.png',
    'Galestalkers': 'imagens/tribes/galestalkers.png',
    'Ghost Council': 'imagens/tribes/ghost_council.png',
    'Glass Walker': 'imagens/tribes/glass_walker.png',
    'Hart Wardens': 'imagens/tribes/hart_wardens.png',
    'Red Talon': 'imagens/tribes/red_talon.png',
    'Shadow Lords': 'imagens/tribes/shadow_lords.png',
    'Silent Striders': 'imagens/tribes/silent_striders.png',
    'Silver Fangs': 'imagens/tribes/silver_fangs.png'
  };
  
  // Função para carregar imagens
  function loadImage(selectElement, imageElement, imageMap) {
    const selectedValue = selectElement.value;
    
    if (selectedValue && imageMap[selectedValue]) {
      imageElement.src = imageMap[selectedValue];
      imageElement.style.display = 'block';
      
      // Verifica se a imagem carregou corretamente
      imageElement.onerror = function() {
        console.error('Erro ao carregar imagem:', imageElement.src);
        imageElement.style.display = 'none';
      };
    } else {
      imageElement.style.display = 'none';
    }
  }
  
  // Inicialização quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', function() {
    // Configura dots
    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', function() {
        this.classList.toggle('filled');
        
        // Preenche dots anteriores
        let previous = this.previousElementSibling;
        while(previous && previous.classList.contains('dot')) {
          previous.classList.add('filled');
          previous = previous.previousElementSibling;
        }
      });
    });
    
    // Configura rolagem de dados
    const rollButton = document.getElementById('roll-dice');
    if (rollButton) {
      rollButton.addEventListener('click', function() {
        const diceCount = parseInt(document.getElementById('dice-count').value) || 1;
        const results = [];
        let successes = 0;
        
        for (let i = 0; i < diceCount; i++) {
          const roll = Math.floor(Math.random() * 10) + 1;
          results.push(roll);
          if (roll >= 8) successes++;
        }
        
        const resultElement = document.getElementById('dice-result');
        if (resultElement) {
          resultElement.innerHTML = `
            <strong>Rolagem de ${diceCount} dados:</strong> ${results.join(', ')}<br>
            <strong>Sucessos (8+):</strong> ${successes}
          `;
          
          // Efeito visual
          resultElement.style.animation = 'none';
          setTimeout(() => {
            resultElement.style.animation = 'pulse 1s';
          }, 10);
        }
      });
    }
    
    // Configura seletores de auspício e tribo
    const auspiceSelect = document.getElementById('auspice-select');
    const tribeSelect = document.getElementById('tribe-select');
    const auspiceImage = document.getElementById('auspice-image');
    const tribeImage = document.getElementById('tribe-image');
    
    if (auspiceSelect && auspiceImage) {
      auspiceSelect.addEventListener('change', function() {
        loadImage(this, auspiceImage, auspiceImages);
      });
      
      // Carrega imagem inicial se já houver seleção
      if (auspiceSelect.value) {
        loadImage(auspiceSelect, auspiceImage, auspiceImages);
      }
    }
    
    if (tribeSelect && tribeImage) {
      tribeSelect.addEventListener('change', function() {
        loadImage(this, tribeImage, tribeImages);
      });
      
      // Carrega imagem inicial se já houver seleção
      if (tribeSelect.value) {
        loadImage(tribeSelect, tribeImage, tribeImages);
      }
    }
  });