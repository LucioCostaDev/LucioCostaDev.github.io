// criação de uma ação no qual ao clica em qualquer tecla do teclado vai ser realizado um pulo na animação

// vai ser adicionado na img do goku a classe jump para que seja realizada a ação
// vai ser pego o elemento de imagem do goku utilizando document. + metodo queryslector(.class) um seletor css ou seja colo a classe conforme está no css
const goku = document.querySelector('.goku'); 

//outra constsante para pega a imagem da barreira no css
const barreira = document.querySelector('.barreira');


/* declaração de variavel */
const jump = () => {
    //adicionando a classe jump no goku
    goku.classList.add('jump')

    //criar um temporizador para remover uma função ou seja setTimeout está com uma função anonima que vai remover o jump par que seja realizado novamente ou seja um loop
    setTimeout(() => {

        goku.classList.remove('jump');

    }, 500);
}

/* criação de uma função que vai verificar toda vez que tiver encostado na barreira */
/* utilizando novamente o setInterval (função, classe) vai ficar em anonimo ()  */
const loop = setInterval(() => {
    
    // logica 
    const barreiraPosition = barreira.offsetLeft;
    //verificação se o deslocamento da direita form menor ou igual a 60
    if (barreiraPosition  )
}, 10)

// criação de um evento ou seja um escutador de eventos => keydown: faz com que tecla apertada efetue ação => jump
document.addEventListener('keydown', jump);