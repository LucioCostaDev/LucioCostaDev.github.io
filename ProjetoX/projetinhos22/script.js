const frm = document.querySelector("form")  // obter elementos da página
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {         // "escuta" evento submit do form
    e.preventDefault()                          // evita o envio do form
    const numero = Number(frm.inNumero.value)   // obter o número informado
    let resposta = ""                           // varival do tipo string, para concatenar a resposta 

// cria um laço de repetição (i começa 1 e é incrementado até 10)
for (let i = 1; i <= 10; i++) {
    // a variavel resposta vai acumulando os novos conteudos (nos 2 formatos)
resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
// reposta = `${resposta}${mumero} x ${i} = $numero{ * i} \n`
}
// o conteudo da tag pre é alterado para exibir a tabuada do número resp.innerText = resposta
resp.innerText = resposta
})