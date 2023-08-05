const quotes = [
    {
        quote: "Ele dá força ao cansado, e aumenta as forças ao que não tem nenhum vigor.",
        versiculo: "Isaías 40:29",
    },
    {
        quote: "A minha alma se consome de tristeza; fortalece-me segundo a tua palavra.",
        versiculo: "Salmos 119:28",
    },
    {
        quote: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; andarão, e não se fatigarão.",
        versiculo: "Isaías 40:31",
    },
    {
        quote: "A face do Senhor está contra os que fazem o mal, para desarraigar da terra a memória deles. Os justos clama, e o Senhor os ouve, e os livra de todas as suas angústias.",
        versiculo: "Salmos 34:16-17",
    },
    {
        quote: "Tenho-vos dito estas coisas, para que em mim tenhais paz. No mundo tereis tribulações; mas tende bom ânimo, eu venci o mundo.",
        versiculo: "João 16:33",
    },
    {
        quote: "Deixo-vos a paz, a minha paz vos dou; eu não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
        versiculo: "João 14:27",
    },
    {
        quote: "Ele me respondeu, dizendo: Esta é a palavra do Senhor a Zorobabel, dizendo: Não por força nem por poder, mas pelo meu Espírito, diz o Senhor dos exércitos.",
        versiculo: "Zacarias 4:6                                                                                                                                                                                                                                                       ",
    },
    {
        quote: "Sede fortes e corajosos; não temais, nem vos atemorizeis diante deles; porque o Senhor vosso Deus é quem vai convosco. Não vos deixará, nem vos desamparará.",
        versiculo: "Deuteronômio 31:6",
    },
    {
        quote: "Os lábios mentirosos são abomináveis ao Senhor; mas os que praticam a verdade são o seu deleite.",
        versiculo: "Provérbios 12:22",
    },
    {
        quote: "Seja, porém, o vosso falar: Sim, sim; não, não; pois o que passa daí, vem do Maligno.",
        versiculo: "Mateus 5:37",
    },
    {
        quote: "Pois, quem quer amar a vida, e ver os dias bons, refreie a sua língua do mal, e os seus lábios não falem engano;",
        versiculo: "1 Pedro 3:10",
    },
    {
        quote: "O lábio veraz permanece para sempre; mas a língua mentirosa dura só um momento.",
        versiculo: "Provérbios 12:19",
    },
    {
        quote: "Filhinhos, não amemos de palavra, nem de língua, mas por obras e em verdade.",
        versiculo: "1 João 3:18",
    },
    {
        quote: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que não se vêem.",
        versiculo: "Hebreus 11:1",
    },
    {
        quote: "Ao que lhe disse Jesus: Se podes! – tudo é possível ao que crê.",
        versiculo: "Marcos 9:23",
    },
    {
        quote: "Ora, sem fé é impossível agradar a Deus; porque é necessário que aquele que se aproxima de Deus creia que ele existe, e que é galardoador dos que o buscam.",
        versiculo: "Hebreus 11:6",
    },
    {
        quote: "Mil poderão cair ao teu lado, e dez mil à tua direita; mas tu não serás atingido.",
        versiculo: "Salmos 91:7",
    },
    {
        quote: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.",
        versiculo: "Salmos 23:4",
    },
    {
        quote: "Porque o Senhor será a tua confiança, e guardará os teus pés de serem presos.",
        versiculo: "Provérbios 3:26",
    },
    {
        quote: "Tu conservarás em paz aquele cuja mente está firme em ti; porque ele confia em ti.",
        versiculo: "Isaías 26:3",
    },
    {
        quote: "Tenho-vos dito estas coisas, para que em mim tenhais paz. No mundo tereis tribulações; mas tende bom ânimo, eu venci o mundo.",
        versiculo: "João 16:33",
    },
    {
        quote: "para que a prova da vossa fé, mais preciosa do que o ouro que perece, embora provado pelo fogo, redunde para louvor, glória e honra na revelação de Jesus Cristo;",
        versiculo: "1 Pedro 1-7",
    },
    {
        quote: "Tudo posso naquele que me fortalece.",
        versiculo: "Filipenses 4:13",
    },
    {
        quote: "Entregue o seu caminho ao Senhor,confie nele, e ele agirá.",
        versiculo: "Salmos 37:5",
    },
    {
        quote: "E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
        versiculo: "1 Coríntios 1:30",
    },
    {
        quote: "Mas aquele que se une ao Senhor torna-se um só espírito com ele.",
        versiculo: "1 Coríntios 6:17",
    },
    {
        quote: "Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. João",
        versiculo: "João 14:6",
    },
    {
        quote: "Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
        versiculo: "Salmo 119:105",
    },
    ];
  
  const quoteBtn = document.getElementById("quoteBtn");
  const quoteText = document.querySelector(".quote .text");
  const quoteVersiculo = document.querySelector(".quote .versiculo");
  
  function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[index].quote;
    quoteVersiculo.textContent = "- " + quotes[index].versiculo;
  }
  
  quoteBtn.addEventListener("click", getQuote);