/* seleçãodos elementos*/
const cpfEl = document.querySelector("#cpf");
const gerarCpfBtn = document.querySelector("#gerar-cpf");
const copiarCpfBtn = document.querySelector("#copiar-cpf")

// criação de uma função visto pelo formato 999.999.999-99
function gerarCPF() {
    // geração dos primeiros 9 digitos do CPF 
    let n = Math.floor(Math.random() * 999999999) +1;  //  Gera um número aleatório entre 1 e 999.999.999 e caso o numero seja menor vai ser preenchido de zero
    let nStr = n.toString().padStart(9, "0");          //  Converte o número aleatório para string e adiciona zeros à esquerda para completar 9 dígitos.
    let dv1 = calcularDV(nStr, 10);                     //calcula o primeiro dígito verificador usando os primeiros 9 dígitos e o peso 10.
    let dv2 = calcularDV(nStr + dv1, 11);               //calcula o segundo dígito verificador usando os 9 dígitos iniciais, o primeiro dígito verificador e o peso 11.
    
    cpfEl.innerText = formatarCPF(nStr + dv1 + dv2);    // FormataCPF o CPF para o padrão brasileiro, adicionando pontos e traços.
    // atribui o CPF formatado ao elemento HTML com o ID cpfEl.
}

function calcularDV(numero, peso) {
    let total = 0;
    for (let i = 0; i < numero.lenght; i++) {
        total += parseInt(numero.CharAt(i)) * peso--;
    }
    let resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
}

/* Explicação:
const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})<span class="math-inline">/\: * `^`: Indica o início da string. * `(\d{3})`: Quatro grupos de captura com três dígitos cada, representados por `\d` (qualquer dígito) repetido três vezes. * ``: Indica o fim da string.
return cpf.replace(regex, "$1.$2.$3-$4"):
replace: Método que substitui uma parte da string pela outra de acordo com a expressão regular e a string de substituição.
$1, $2, $3, $4: Backreferences que correspondem aos grupos de captura na expressão regular.
.$2.$3-$4: Insere pontos e um traço entre os grupos de captura para formatar o CPF. */
function formatarCPF(cpf) {
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return cpf.replace(regex, "$1.$2.$3-$4");    //entrega no padrão de CPF
}

function copiarCPF() {
    const cpf = cpfEl.innerText
    navigator.clipboard.writeText(cpf).then(
        () => {
            alert(`CPF ${cpf} copiado para a área de transferência.`);
        },
        (err) => {
            console.log("Erro ao copiar CPF.")
        }
    );
}

// criação de eventos para gerar ao clicar 
gerarCpfBtn.addEventListener("click", gerarCPF);
copiarCpfBtn.addEventListener("click", copiarCPF)
