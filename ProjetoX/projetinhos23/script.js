// // declarações e obter elementos da página
// const frm = document.querySelector("form")
// const resp = document.querySelector("h3")

// //"escsuta" evento submit do form
// frm.addEventListener("submit", (e) => {
//     e.preventDefault()                           // evita o envio do form
//     const numero = Number(frm.inNumero.value)    // obtém número informado
//     // let resposta = `Entre ${numero} e 1: `       String para montar a resposta
//     for (let i = numero; i > 0; i = i - 1) {     // cria um for decrescente
//         resposta = resposta + i + ", "           // resposta acumula números (e virgula)
//     } 

//     resp.innerText = resposta                    // exibe a resposta
// })

// declarações e obter elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"escuta" evento submit do form
frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const numeroOpcao = Number(frm.inNumero.value)
  const opcao = frm.querySelector("input[name='opcao']:checked").value

  let resposta = `Entre ${numeroOpcao} e 1: `

  if (opcao === "decrescente") {
    for (let i = numeroOpcao; i > 0; i = i - 1) {
      resposta = resposta + i + ", "
    }
  } else {
    for (let i = 1; i <= numeroOpcao; i = i + 1) {
      resposta = resposta + i + ", "
    }
  }
  resp.innerText = resposta
})