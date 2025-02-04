function atualizarFicha() {
    let nome = document.getElementById("nome").value;
    let forma = document.getElementById("forma").value;
    let forca = document.getElementById("forca").value;
    let destreza = document.getElementById("destreza").value;
    let inteligencia = document.getElementById("inteligencia").value;

    // Pegando habilidades selecionadas
    let habilidadesSelecionadas = [];
    let checkboxes = document.querySelectorAll(".habilidade:checked");
    checkboxes.forEach((checkbox) => {
        habilidadesSelecionadas.push(checkbox.value);
    });

    // Atualizando os dados exibidos
    document.getElementById("exibir-nome").innerText = nome || "-";
    document.getElementById("exibir-forma").innerText = forma;
    document.getElementById("exibir-forca").innerText = forca;
    document.getElementById("exibir-destreza").innerText = destreza;
    document.getElementById("exibir-inteligencia").innerText = inteligencia;
    document.getElementById("exibir-habilidades").innerText = habilidadesSelecionadas.length ? habilidadesSelecionadas.join(", ") : "Nenhuma";

    // Atualizando imagem conforme a forma
    let imagem = document.getElementById("imagem-forma");
    if (forma === "lobo") {
        imagem.src = "lobo.jpg";
    } else if (forma === "glabro") {
        imagem.src = "glabro.jpg";
    } else if (forma === "crinos") {
        imagem.src = "crinos.jpg";
    }
}

// Função para resetar a ficha
function resetarFicha() {
    document.getElementById("nome").value = "";
    document.getElementById("forma").value = "lobo";
    document.getElementById("forca").value = 1;
    document.getElementById("destreza").value = 1;
    document.getElementById("inteligencia").value = 1;

    // Resetando habilidades
    let checkboxes = document.querySelectorAll(".habilidade");
    checkboxes.forEach((checkbox) => checkbox.checked = false);

    atualizarFicha(); // Atualiza a exibição
}