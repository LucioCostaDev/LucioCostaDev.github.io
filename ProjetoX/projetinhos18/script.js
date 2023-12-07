const frm = document.querySelector("form")        // obtém os elementos da página
const resp1 = document.querySelector("#outTempo") // para obter resposta do h3
const resp2 = document.querySelector("#outTroco")

frm.addEventListener ("submit", (e) => {
    e.preventDefault() //evita envio do form

    const valor = Number(frm.inValor.value) // obtém número digitado no form

    //caso o valor insuficiente
    if (valor < 1.00) {
        alert("Valor Insuficiente (no mínimo, R$ 1.00") // vai alerta que não pode ser menor
        frm.inValor.focus()
        return
    }

    // declara variáveis
    let tempo 
    let troco 

    //cria as condições para verificar tempo e troco
    if (valor >= 3.00) {
        tempo = 120             // rececbe o tempo de 120 min
        troco = valor - 3.00    // troco igual valor menos 3.00
    } else if (valor >= 1.75) { // senão se valor for maior ou igual a 1.75
        tempo = 60              // tempo recebe 60min
        troco = valor - 1.75    // troco recebe o valor menos 1.75
    } else {                    // senão 
        tempo = 30              // tempo recebe 30min
        troco = valor - 1.00    // troco recebe valor menos 1.00
    }

    // exibe as respostas
    resp1.innerText  = `Tempo: ${tempo} min`
    if(troco > 0) 
    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
})