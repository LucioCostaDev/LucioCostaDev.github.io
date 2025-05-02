// Configuração das imagens de Auspício e Tribo
const auspiceImages = {
    'ragabash': 'imagens/auspices/ragabash.png',
    'theurge': 'imagens/auspices/theurge.png',
    'philodox': 'imagens/auspices/philodox.png',
    'galliard': 'imagens/auspices/galliard.png',
    'ahroun': 'imagens/auspices/ahroun.png'
  };
  
  const tribeImages = {
    'Black Furies': 'imagens/tribes/Black Furies.png',
    'Bone Gnawers': 'imagens/tribes/Bone Gnawers.png',
    'Children Gai': 'imagens/tribes/Children of Gaia.png',
    'Galestalkers': 'imagens/tribes/galestalkers.png',
    'Ghost Council': 'imagens/tribes/Ghost Council.png',
    'Glass Walker': 'imagens/tribes/Glass Walkers.png',
    'Hart Wardens': 'imagens/tribes/Hart Wardens.png',
    'Red Talon': 'imagens/tribes/Red Talons.png',
    'Shadow Lords': 'imagens/tribes/Shadow Lords.png',
    'Silent Striders': 'imagens/tribes/Silent Striders.png',
    'Silver Fangs': 'imagens/tribes/Silver Fangs.png'
  };
  
  // Configuração dos resultados dos dados
  const diceResults = {
    0: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Failure.png', class: 'failure' },
    1: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Failure.png', class: 'failure' },
    2: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Failure.png', class: 'failure' },
    3: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Failure.png', class: 'failure' },
    4: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Failure.png', class: 'failure' },
    5: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Failure.png', class: 'failure' },
    6: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Failure.png', class: 'failure' },
    7: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Failure.png', class: 'failure' },
    8: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Regular_Success.png', class: 'success' },
    9: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Regular_Success.png', class: 'success' },
    10: { img: 'imagens/Dice - Werewolf The Apocalypse/Dice_Rage_Success.png', class: 'critical' }
  };
  
  // Função para carregar imagens flutuantes
  function loadFloatingImage(selectElement, imageElement, imageMap) {
    const selectedValue = selectElement.value;
    
    if (selectedValue && imageMap[selectedValue]) {
      imageElement.src = imageMap[selectedValue];
      imageElement.style.display = 'block';
      
      imageElement.onerror = function() {
        console.error('Erro ao carregar imagem:', imageElement.src);
        imageElement.style.display = 'none';
      };
    } else {
      imageElement.style.display = 'none';
    }
  }
  
  // Função para rolar os dados
  function rollDice() {
    const count = parseInt(document.getElementById('dice-count').value) || 1;
    const difficulty = parseInt(document.getElementById('difficulty').value) || 8;
    const container = document.getElementById('dice-images-container');
    const totalDiceElement = document.getElementById('total-dice');
    const successCountElement = document.getElementById('success-count');
    const criticalCountElement = document.getElementById('critical-count');
    const failureCountElement = document.getElementById('failure-count');
    
    // Limpa resultados anteriores
    container.innerHTML = '';
    totalDiceElement.textContent = '0';
    successCountElement.textContent = '0';
    criticalCountElement.textContent = '0';
    failureCountElement.textContent = '0';
    
    // Animação de rolagem
    for (let i = 0; i < count; i++) {
      const dice = document.createElement('img');
      dice.className = 'dice-face rolling';
      dice.src = 'imagens/Dice - Werewolf The Apocalypse/exclamation.png';
      container.appendChild(dice);
    }
    
    // Resultado após 1 segundo
    setTimeout(() => {
      let successes = 0;
      let criticals = 0;
      let failures = 0;
      container.innerHTML = '';
      
      // Gera os resultados
      const results = [];
      for (let i = 0; i < count; i++) {
        const roll = Math.floor(Math.random() * 10) + 1;
        results.push(roll);
        
        if (roll >= difficulty) successes++;
        if (roll === 10) criticals++;
        if (roll < difficulty) failures++;
      }
      
      // Mostra os dados com efeito sequencial
      results.forEach((roll, index) => {
        setTimeout(() => {
          const result = diceResults[roll];
          const dice = document.createElement('img');
          dice.className = `dice-face ${result.class}`;
          dice.src = result.img;
          dice.alt = `Dado: ${roll}`;
          dice.title = `Resultado: ${roll}`;
          container.appendChild(dice);
        }, index * 100);
      });
      
      // Atualiza o resumo
      setTimeout(() => {
        totalDiceElement.textContent = count;
        successCountElement.textContent = successes;
        criticalCountElement.textContent = criticals;
        failureCountElement.textContent = failures;
        
        // Efeito especial para críticos
        if (criticals > 0) {
          criticalCountElement.classList.add('pulse');
          setTimeout(() => {
            criticalCountElement.classList.remove('pulse');
          }, 2000);
        }
      }, count * 100);
    }, 1000);
  }
  
  // Inicialização quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', function() {
    // Configura os pontos (dots)
    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', function() {
        this.classList.toggle('filled');
        
        // Preenche os pontos anteriores
        let previous = this.previousElementSibling;
        while(previous && previous.classList.contains('dot')) {
          previous.classList.add('filled');
          previous = previous.previousElementSibling;
        }
      });
    });
    
    // Configura os seletores de Auspício e Tribo
    const auspiceSelect = document.getElementById('auspice-select');
    const tribeSelect = document.getElementById('tribe-select');
    const auspiceFloatingImage = document.getElementById('auspice-floating-image');
    const tribeFloatingImage = document.getElementById('tribe-floating-image');
    
    if (auspiceSelect && auspiceFloatingImage) {
      auspiceSelect.addEventListener('change', function() {
        loadFloatingImage(this, auspiceFloatingImage, auspiceImages);
      });
      // Carrega imagem se já houver seleção
      if (auspiceSelect.value) {
        loadFloatingImage(auspiceSelect, auspiceFloatingImage, auspiceImages);
      }
    }
    
    if (tribeSelect && tribeFloatingImage) {
      tribeSelect.addEventListener('change', function() {
        loadFloatingImage(this, tribeFloatingImage, tribeImages);
      });
      // Carrega imagem se já houver seleção
      if (tribeSelect.value) {
        loadFloatingImage(tribeSelect, tribeFloatingImage, tribeImages);
      }
    }
    
    // Configura o botão de rolar dados
    const rollButton = document.getElementById('roll-dice');
    if (rollButton) {
      rollButton.addEventListener('click', rollDice);
    }
    
    // Opcional: Rolagem automática ao carregar para demonstração
    // setTimeout(rollDice, 500);
  });