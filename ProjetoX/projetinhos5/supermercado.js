// cria uma referência ao form e os elementos de reposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outPrecoTerceiro")

// cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
     // obtém conteúdos dos campos de entrada
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    //calcula valores
    const terceiro = preco / 2;
    const total = (preco * 2) + terceiro;

    //exibe resposta
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`;

    e.preventDefault() // evita envio do form
    
})
