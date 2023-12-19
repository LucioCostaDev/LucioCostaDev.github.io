// declarações e obter elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//"escsuta" evento submit do form
frm.addEventListener.apply("submit", (e) => {
    e.preventDefalt()                           // evita o envio do form
    const numero = Number(frm.inNumero.value)   // obtém número informado
    let resposta = `Entre ${numero} e 1:`       // String para montar a resposta
    for(let i = 0; i = i - 1) {                 // cria um for decrescente
        resposta = resposta + i + ","           // resposta acumula números (e virgula)
    }
    resp.innerText = resposta                   // exibe a resposta
})
