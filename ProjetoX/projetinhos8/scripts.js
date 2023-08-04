// Obter referências aos elementos HTML

/* const é uma palavra-chave que declara que a variável inputElement é constante, o que significa que seu valor não pode ser alterado.

inputElement é o nome da variável.

= é o operador de atribuição.

document.querySelector("#input"); é o valor que está sendo atribuído à variável inputElement.

document é um objeto que representa o documento HTML atual.

querySelector() é um método no objeto document que é usado para retornar o primeiro elemento que corresponde a um determinado seletor CSS.

#input é um seletor CSS que corresponde a um elemento com o ID input. */

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from"); /* e o tipo de dado  */
const toElement = document.querySelector("#to"); /* i tipo de dado que vai ser convertido */
const outputElement = document.querySelector("#output"); /* os dados de saida */
const convertButton = document.querySelector("#convert-btn"); /* o botão que vai fazer a a ação */
const messageElement = document.querySelector("#message"); /* aqui e a mensagem que vai aparecer */

// cração de uma função para converter as unidades
function convert() {
  // Obter os valores das unidades de entrada e saída
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  // Verificar se as unidades de entrada e saída são iguais
  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  // Converter o valor de entrada para metros
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  // Converter os metros para a unidade de saída
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }

  // Exibir o resultado na caixa de saída
  output.value = result.toFixed(2);

  // Exibir a mensagem de conversão
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  const message = `${
    inputElement.value
  } ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
  messageElement.textContent = message;
}

// Adicionar um ouvinte de eventos ao botão de conversão
convertButton.addEventListener("click", convert);
