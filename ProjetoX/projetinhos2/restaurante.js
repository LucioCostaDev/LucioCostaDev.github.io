// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) //obtém conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * cosumo //calcula valor à ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` //exibe resposta obs.tofixed formata notação de ponto fixo

    e.preventDefault() // evita envio do form
});