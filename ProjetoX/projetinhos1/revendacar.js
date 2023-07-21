//cria referência ao form e aos elementos de resposta (pelo sei id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
/* 
Aqui são declarados variaveis na const que vai receber
as reposta
Ex.
<h3 id="outResp1"></h3> seletor corespondente ID=outResp1
<h3 id="outResp2"></h3> 
<h3 id="outResp3"></h3> 
*/

// criar um "ouvinte de evento, acionando quando o botão submit for cliclado"

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value //obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50 // calcula valor da entrada
    const parcela = (preco * 0.50) / 12 // ...e das parcelas

    resp1.innerHTML = `Promoção: ${veiculo}` // exibe as respostas
    resp2.innerHTML = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerHTML = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault() // evita envio de form
})