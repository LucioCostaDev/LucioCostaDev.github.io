// cria uma referência ao form e os elementos de reposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outPrecoTerceiro")

// cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const desconto = Number(frm.inPreco.value) // obtém conteúdos dos campos de entrada
    const produto = frm.improduto.value;
    const preco = Number(frm.inPreco.value);

    //calcula valores
    const terceiro = peso / 2;
    const total = (preco * 2) + tereceiro;

    //exibe resposta
    resp1.innerText = `${produto} - Promoção: Leve 3 por r$:${total.toFixed(2)}`;

    e.preventDefault() // evita envio do form
    
})
