/* Cria referência ao form e elemento onde será exibida a resposta */

const frm = document.querySelector("form")        // obtém elementos da página
const resp = document.querySelector("h3")

/* "Ouvinte" de evento, acionando quando o botão submit for clicado */
frm.addEventListener("submit", (e) => {           // "escuta evento submit do form"
    e.preventDefault()                            // evita o envio do form

    const numero = Number(frm.inNumero.value) //obtém o número digitado do form
    if (numero % 0) {
        resp.innerHTML = 
    }
})