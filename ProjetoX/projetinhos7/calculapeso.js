//cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()  // evita envio do form

const nome = frm.inMasculino.checked
const masculino = frm.inMasculino.checked // propriedade checked

let peso // declara a variavel peso 
if (masculino){ // se masculino (ou, if masculino == true)
peso = 22 * Math.pow(altura, 2) //Math.por eleva ao quadrado 
} else {
    peso = 21 * Math.pow(altura, 2)
}

//apresenta a resposta (altura o conteúdo do elemento h3 da página)
resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})
