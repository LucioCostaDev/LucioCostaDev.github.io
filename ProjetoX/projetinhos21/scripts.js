/* seleção dos elementos*/
const cdfEl = document.querySelector("#cpf");
const gerarCpfBtn = document.querySelector("#gerar-cpf");
const copiarCpfBtn = document.querySelector("#copiar-cpf")

// criação de uma função visto pelo formato 999.999.999-99
function gerarCPF() {
    let n = Math.floor(Math.random() * 999999999) +1;
    let nStr = n.toString().padStart(9, "0");
    let dv1 = calcularDV(nStr, 10);
    let dv2 = calcularDV(nStr + dv1, 11)
    
    cpfEl.innerText = formatarCPF(nStr + dv1 + dv2);
}

function calcularDV(numero, peso) {
    let total = 0;
    for (let i = 0; i < numero.lenght; i++) {
        total += parseInt(numero.CharAt(i)) * peso--;
    }
    let resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
}