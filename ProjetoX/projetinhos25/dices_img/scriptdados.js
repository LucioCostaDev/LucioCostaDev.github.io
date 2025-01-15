// FUNÇÃO UTILIZANDO SWITCH
// function trocarImagem() {
//   var sorteio = Math.floor(Math.random() * 10 + 1); // Gera número de 1 a 10

//   switch (sorteio) {
//     case 1:
//       document.getElementById("face").src = "Dice_Regular_Failure.png";
//       break;
//     case 2:
//       document.getElementById("face").src = "Dice_Regular_Failure.png";
//       break;
//     case 3:
//       document.getElementById("face").src = "Dice_Regular_Failure.png";
//       break;
//     case 4:
//       document.getElementById("face").src = "Dice_Regular_Failure.png";
//       break;
//     case 5:
//       document.getElementById("face").src = "Dice_Regular_Failure.png";
//       break;
//     case 6:
//       document.getElementById("face").src = "Dice_Regular_Success.png";
//       break;
//     case 7:
//       document.getElementById("face").src = "Dice_Regular_Success.png";
//       break;
//     case 8:
//       document.getElementById("face").src = "Dice_Regular_Success.png";
//       break;
//     case 9:
//       document.getElementById("face").src = "Dice_Regular_Success.png";
//       break;
//     case 10:
//       document.getElementById("face").src = "Dice_Regular_Critical.png";
//       break;
//     default:
//       console.error("Número fora do intervalo!");
//   }
// }

// FUNÇÃO UTILIZANDO ARRAYS 
function trocarImagem() {
  var imagens = [
    "Dice_Rage_Brutal.png",
    "Dice_Rage_Critical.png",
    "Dice_Rage_Failure.png",
    "Dice_Rage_Success.png",
    "Dice_Regular_Critical.png",
    "Dice_Regular_Failure.png",
    "Dice_Regular_Success.png",
  ];

  var sorteio = Math.floor(Math.random() * imagens.length);
  document.getElementById("face").src = imagens[sorteio];
}
l