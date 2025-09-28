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

  // Função para salvar toda a ficha
function saveCharacterSheet() {
  const characterData = {};
  
  // Salvar campos de texto e selects
  document.querySelectorAll('input, select').forEach(element => {
    if (element.type !== 'button' && element.id !== 'dice-count' && element.id !== 'difficulty') {
      characterData[element.id || element.name || element.className] = element.value;
    }
  });
  
  // Salvar pontos selecionados
  document.querySelectorAll('.dot').forEach((dot, index) => {
    characterData[`dot-${index}`] = dot.classList.contains('filled');
  });
  
  // Converter para JSON e salvar
  localStorage.setItem('werewolfCharacterSheet', JSON.stringify(characterData));
  alert('Ficha salva com sucesso!');
}

// Função para carregar a ficha
function loadCharacterSheet() {
  const savedData = localStorage.getItem('werewolfCharacterSheet');
  if (!savedData) return;
  
  const characterData = JSON.parse(savedData);
  
  // Carregar campos de texto e selects
  document.querySelectorAll('input, select').forEach(element => {
    if (element.type !== 'button' && element.id !== 'dice-count' && element.id !== 'difficulty') {
      const key = element.id || element.name || element.className;
      if (characterData[key] !== undefined) {
        element.value = characterData[key];
      }
    }
  });
  
  // Carregar pontos
  document.querySelectorAll('.dot').forEach((dot, index) => {
    const key = `dot-${index}`;
    if (characterData[key]) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  });
  
  // Atualizar imagens flutuantes se necessário
  const auspiceSelect = document.getElementById('auspice-select');
  const tribeSelect = document.getElementById('tribe-select');
  if (auspiceSelect && auspiceSelect.value) {
    loadFloatingImage(auspiceSelect, document.getElementById('auspice-floating-image'), auspiceImages);
  }
  if (tribeSelect && tribeSelect.value) {
    loadFloatingImage(tribeSelect, document.getElementById('tribe-floating-image'), tribeImages);
  }
}

// Adicionar botão de salvar
function addSaveButton() {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Salvar Ficha';
  saveButton.style.margin = '10px';
  saveButton.style.padding = '8px 15px';
  saveButton.style.backgroundColor = '#8b0000';
  saveButton.style.color = 'white';
  saveButton.style.border = 'none';
  saveButton.style.borderRadius = '4px';
  saveButton.style.cursor = 'pointer';
  
  saveButton.addEventListener('click', saveCharacterSheet);
  
  const loadButton = saveButton.cloneNode();
  loadButton.textContent = 'Carregar Ficha';
  loadButton.addEventListener('click', loadCharacterSheet);
  
  footer.prepend(loadButton);
  footer.prepend(saveButton);
}

// Adicionar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  // ... seu código existente ...
  
  addSaveButton();
  loadCharacterSheet(); // Carrega automaticamente se houver dados salvos
});

// Função para exportar ficha como JSON
function exportCharacterSheet() {
  const characterData = {};
  
  // Coletar todos os dados como no saveCharacterSheet()
  document.querySelectorAll('input, select').forEach(element => {
    if (element.type !== 'button' && element.id !== 'dice-count' && element.id !== 'difficulty') {
      characterData[element.id || element.name || element.className] = element.value;
    }
  });
  
  document.querySelectorAll('.dot').forEach((dot, index) => {
    characterData[`dot-${index}`] = dot.classList.contains('filled');
  });
  
  // Criar elemento para copiar
  const exportData = JSON.stringify(characterData, null, 2);
  const textarea = document.createElement('textarea');
  textarea.value = exportData;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  
  alert('Ficha copiada para a área de transferência! Cole em um arquivo de texto para salvar.');
}

// Função para importar ficha de JSON
function importCharacterSheet() {
  const importData = prompt('Cole aqui o JSON da ficha:');
  if (!importData) return;
  
  try {
    const characterData = JSON.parse(importData);
    
    // Carregar os dados como no loadCharacterSheet()
    document.querySelectorAll('input, select').forEach(element => {
      if (element.type !== 'button' && element.id !== 'dice-count' && element.id !== 'difficulty') {
        const key = element.id || element.name || element.className;
        if (characterData[key] !== undefined) {
          element.value = characterData[key];
        }
      }
    });
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
      const key = `dot-${index}`;
      if (characterData[key]) {
        dot.classList.add('filled');
      } else {
        dot.classList.remove('filled');
      }
    });
    
    // Atualizar imagens flutuantes
    const auspiceSelect = document.getElementById('auspice-select');
    const tribeSelect = document.getElementById('tribe-select');
    if (auspiceSelect && auspiceSelect.value) {
      loadFloatingImage(auspiceSelect, document.getElementById('auspice-floating-image'), auspiceImages);
    }
    if (tribeSelect && tribeSelect.value) {
      loadFloatingImage(tribeSelect, document.getElementById('tribe-floating-image'), tribeImages);
    }
    
    alert('Ficha importada com sucesso!');
  } catch (e) {
    alert('Erro ao importar ficha: ' + e.message);
  }
}

// Atualizar a função addSaveButton para incluir export/import
function addSaveButton() {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  
  // Criar estilo base para os botões
  const baseButtonStyle = {
    margin: '5px',
    padding: '6px 12px',
    backgroundColor: '#8b0000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontWeight: 'bold'
  };

  // Função para criar botões consistentes
  function createButton(text, onClick, color = '#8b0000') {
    const button = document.createElement('button');
    button.textContent = text;
    Object.assign(button.style, baseButtonStyle);
    button.style.backgroundColor = color;
    button.addEventListener('click', onClick);
    return button;
  }

  // Container para os botões
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.flexWrap = 'wrap';
  buttonContainer.style.gap = '5px';
  buttonContainer.style.marginBottom = '10px';

  // Adicionar botões
  buttonContainer.appendChild(createButton('Salvar Ficha', saveCharacterSheet));
  buttonContainer.appendChild(createButton('Carregar Ficha', loadCharacterSheet));
  buttonContainer.appendChild(createButton('Exportar Ficha', exportCharacterSheet));
  buttonContainer.appendChild(createButton('Importar Ficha', importCharacterSheet));
  buttonContainer.appendChild(createButton('Limpar Ficha', clearCharacterSheet, '#d9534f')); // Vermelho para diferenciar

  footer.prepend(buttonContainer);
}

// Função para limpar toda a ficha
function clearCharacterSheet() {
  // Confirmar com o usuário antes de limpar
  if (!confirm('Tem certeza que deseja limpar toda a ficha? Esta ação não pode ser desfeita.')) {
    return;
  }

  // Limpar campos de texto e selects
  document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => {
    input.value = '';
  });

  // Resetar selects para a primeira opção
  document.querySelectorAll('select').forEach(select => {
    select.selectedIndex = 0;
  });

  // Limpar todos os pontos (dots)
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('filled');
  });

  // Esconder imagens flutuantes
  document.getElementById('auspice-floating-image').style.display = 'none';
  document.getElementById('tribe-floating-image').style.display = 'none';

  // Limpar também do localStorage
  localStorage.removeItem('werewolfCharacterSheet');

  alert('Ficha limpa com sucesso!');
}

function rollDice() {
  const numDice = document.getElementById("numDice").value;
  const diceContainer = document.getElementById("dice-results");
  diceContainer.innerHTML = ""; // limpa os dados anteriores

  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * 10) + 1; // número de 1 a 6
    const img = document.createElement("img");

    // aqui você pode usar suas próprias imagens de dados
    img.src = `imagens/img/dado${roll}.png`; 
    img.alt = `Dado ${roll}`;
    diceContainer.appendChild(img);
  }
}