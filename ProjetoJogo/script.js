// criação de uma ação no qual ao clica em qualquer tecla do teclado vai ser realizado um pulo na animação

// vai ser adicionado na img do goku a classe jump para que seja realizada a ação
// vai ser pego o elemento de imagem do goku utilizando document. + metodo queryslector(.class) um seletor css ou seja colo a classe conforme está no css
const goku = document.querySelector('.goku'); 

//outra constsante para pega a imagem da barreira no css
const barreira = document.querySelector('.barreira');


/* declaração de variavel */
const jump = () => {
    //adicionando a classe jump no goku
    goku.classList.add('jump');

    //criar um temporizador para remover uma função ou seja setTimeout está com uma função anonima que vai remover o jump par que seja realizado novamente ou seja um loop
    setTimeout(() => {
        goku.classList.remove('jump');
    }, 500);
}

/* criação de uma função que vai verificar toda vez que tiver encostado na barreira */
/* utilizando novamente um intervalo ou temporizador com setInterval(função, tempo) vai ficar em anonimo ()  */
const loop = setInterval(() => {
    
    // logica vai ser criar uma constante chamada barreiraPosition que vai ser a posição da barreira ao tocar  ou seja vai pega o deslocamento esquerdo com offsetLeft da barreira
    const barreiraPosition = barreira.offsetLeft;

    //cria uma constante para goku, visto que devido não possuir offsetBottom vai ser realizado window.getComputedStyle(classe) para buscar o elemento dentro da css
    // alinha de codigo no console está aparecendo o valor px e para não aparecer utiliza-se .replace('o que tirar', '') visto que precisamos calcular, com isso tornando de string para numero
    // ao colocar o + na frente do windows ele converte para number
    const gokuPosition = +window.getComputedStyle(goku).bottom.replace('px', '');
    console.log(gokuPosition);

    //verificação se o deslocamento da direita for menor ou igual a 60 perde
    if (barreiraPosition =  120 && barreiraPosition > 0 &&  barreiraPosition < 80) {
        //isso interrompe a animação do elemento barreira
        barreira.style.animation = 'none';
        /* A linha barreira.style.left =${barreiraPosition}; define a propriedade CSS left  do elemento barreira para o valor atual de barreiraPosition. Isso significa que o elemento barreira será posicionado no valor atual de barreiraPosition. */
        barreira.style.left = `${barreiraPosition}px`;
    
        goku.style.animation = 'none';
        goku.style.bottom = `${gokuPosition}px`;

        // goku.scr = '.'
    }

}, 10);

// criação de um evento ou seja um escutador de eventos => keydown: faz com que tecla apertada efetue ação => jump
document.addEventListener('keydown', jump);