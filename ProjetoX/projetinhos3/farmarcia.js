// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicamento")  // coloca a referência id declarada dentro de H3
const resp2 = document.querySelector("#outPromocao")
// const resp3 = document.querySelector("outResp3")


// cria um "ouvinte" de evento, acionado quando o butão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    //calcula valor da promoção (arredonda para baixo)
     const promocao = Math.floor(preco * 2)

    // exibe as respostas
    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`

    // resp2.innerHTML = `Valor R$: ${preco}`
    // resp3.innerHTML = `Na compra de 2x: ${desconto} de desconto`
    
    e.preventDefault()
})

/* 
Lógicas não feitas acertos
- criação de apenas 2 const, que receberia referência ("outMedicamentos") ("outPromocao")

- o valor da promoção seria calcular o valor da promoção (arredonda para baixo) ou seja utilizando a função Math.floor(preco * 2)
*/