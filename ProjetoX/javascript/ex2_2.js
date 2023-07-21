// criar referência ao form e aoS elemento h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector(h3)
const resp2 = document.querySelector(h4)


//Cria um "Ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value // obtém o conteúdos dos campos
    const duracao = Number(frm.inDuracao.value) // obtém conteúdos dos campos

    const horas = Math.floor(duracao / 60) //arredonda para baixo resultado
    const minutos = duracao % 60 // obtém o resto da divisão

    resp1.innerText = titulo // exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minutos(s)` //exibe a resposta do programa
    
    e.preventDefault() //evita envio do form
})

/*  */