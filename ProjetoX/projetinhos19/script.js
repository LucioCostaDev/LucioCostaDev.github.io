const frm = document.querySelector("form")          // obter o elementos da pagina (HTML)
const resp1 = document.querySelector("#outSimNao")    // pega id=outSinNao da pagina(HTML) h3
const resp2 = document.querySelector("#outTipo")    // pega id=outTipo da pagina(HTML) h3

// criando um evento para validação com addEventListener
frm.addEventListener("submit", (e) => {
    e.preventDefault()                              // evita envio do form

    // converte dados de entrada
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    // cria as condições para exibir a resposta
    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        resp1.innerText = "Lados podem formar um triângulo"
    } else { 
        resp1.innerText = "Lados podem formar um triângulo"
    }
    if (ladoA == ladoB && ladoA == ladoC) {
        resp2.innerText = "Tipo: Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        resp2.innerText = "Tipo: Isósceles"
    } else {
        resp2.innerText = "Tipo: Escaleno"
    }
  }
})
 