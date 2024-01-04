const calculateBtn = document.querySelector("#calculateBtn");

function calculateTip() {

    const billAmount = document.querySelector("#billAmount").value;
    const serviceQaulity = document.querySelector("#serviceQuality").value;

    if (billAmount === "") {
        alert("Por favor, preencha os dados");
        return;
        
    }
}

calculateBtn.addEventListener("click", calculateTip);