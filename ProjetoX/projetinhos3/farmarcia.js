// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("outResp1")  // coloca a referência id declarada dentro de H3
const resp2 = document.querySelector("outResp2")
const resp3 = document.querySelector("outResp3")

// cria um "ouvinte" de evento, acionado quando o butão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const valor = preco
    const entrada = ( 1 / 100) * valor
    const desconto = entrada * 2

    resp1.innerHTML = `Medicamento: ${medicamento}`
    resp2.innerHTML = `Valor R$: ${preco}`
    resp3.innerHTML = `Na compra de 2x: ${desconto} de desconto`
    
});
