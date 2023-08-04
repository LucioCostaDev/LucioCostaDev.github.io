//criação de um função de atualização do relogio
function updateClock() {
    //declaração de variaveis que vão receber valores
    const clockElement = document.querySelector(".clock");
    const hoursElement = clockElement.querySelector(".hours");
    const minutesElement = clockElement.querySelector(".minutes");
    const secondsElement = clockElement.querySelector(".seconds");
    
    //função com new Date()
    const now = new Date();
//  decçaração hours = utilização de get e converter para string 
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
 /*  hoursElementé o nome do elemento cujo conteúdo de texto está sendo definido.
     .textContenté a propriedade do elemento que está sendo definido.
    = é o operador de atribuição.
    hours é o valor que está sendo atribuído à propriedade */
  }
  
  updateClock();
  setInterval(updateClock, 1000);

  /* updateClock() é o nome da função que será chamada repetidamente.

    setInterval() é a função que é usada para criar um temporizador de repetição.

    1000 é o intervalo em milissegundos. */


  /* const é uma palavra-chave que declara que a variável hoursé constante, o que significa que seu valor não pode ser alterado.

hours é o nome da variável.

= é o operador de atribuição.

now.getHours() é um método que retorna a hora atual como um inteiro entre 0 e 23.

.toString() é um método que converte um objeto em uma string.

.padStart() é um método que preenche uma string com um caractere especificado em um 
comprimento especificado.

2é o comprimento da string após o preenchimento.

"0"é o caractere que está sendo preenchido. */