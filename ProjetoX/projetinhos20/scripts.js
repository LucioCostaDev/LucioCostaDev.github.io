const generateButton = document.querySelector("#generate-button");
const colorsDiv = document.querySelector(".colors");

//criando uma função 
function generateColors() {
    colorsDiv.innerHTML = "";

    for(let i = 0; i < 5; i++) {

        const color = generateRandomColor();
        // console.log(color);

        /* E PRECISO COLOCAR A COR GERADA  */
        //aqui vai alterar diretamente pelo codigo na base css para aparecer na pagina
        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = color;
        const colorName = document.createElement("p");
        colorName.textContent = color;
        colorDiv.appendChild(colorName);
        colorsDiv.appendChild(colorDiv);
    }
}

// criação de uma função para gerar cor hexadeciaml sendo que tem uma regra onde sentras e numeros de 0123456789ABCDEF
function generateRandomColor() {
    // declaração da variavel que vai receber "0123456789ABCDEF" 16 caracteres. que estão em arrays
    const letters = "0123456789ABCDEF";
    // let variavel com o caractere # que vai ser concatenado
    let color = "#";

    //criação de um for para pegar seis numeros (hexadecimal)
    for(let i = 0; i < 6; i++) {
    //  # concatenando com os caracteres, floor = garante que seja arredondado, random(aleatorio) gerando ate 16 numeros multiplicado por 16, com isso pegando cores validas segundo java
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}

// para funcionar tem que ser criado um evento 
generateButton.addEventListener("click", generateColors);
