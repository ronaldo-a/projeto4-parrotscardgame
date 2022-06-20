let cartas = [
  `<div class="card" onclick="virarCarta(this)">
  <img class="back" src="imgsParrot/front.png" alt="" />
  <img class="front escondido" src="imgsParrot/bobrossparrot.gif" alt="">
</div>`,
  `<div class="card" onclick="virarCarta(this)">
<img class="back" src="imgsParrot/front.png" alt="" />
  <img class="front escondido" src="imgsParrot/explodyparrot.gif" alt="" />
</div>`,
  `<div class="card" onclick="virarCarta(this)">
  <img class="back" src="imgsParrot/front.png" alt="" />
<img class="front escondido" src="imgsParrot/fiestaparrot.gif" alt="" />
</div>`,
  `<div class="card" onclick="virarCarta(this)">
  <img class="back" src="imgsParrot/front.png" alt="" />
<img class="front escondido" src="imgsParrot/metalparrot.gif" alt="" />
</div>`,
  `<div class="card" onclick="virarCarta(this)">
  <img class="back" src="imgsParrot/front.png" alt="" />
<img class="front escondido" src="imgsParrot/revertitparrot.gif" alt="" />
</div>`,
  `<div class="card" onclick="virarCarta(this)">
  <img class="back" src="imgsParrot/front.png" alt="" />
<img class="front escondido" src="imgsParrot/tripletsparrot.gif" alt="" />
</div>`,
  `<div class="card" onclick="virarCarta(this)">
  <img class="back" src="imgsParrot/front.png" alt="" />
<img class="front escondido" src="imgsParrot/unicornparrot.gif" alt="" />
</div>`
]

let cartasJogo = []
let cartaVirada1
let cartaVirada2
let cartaVirada1Txt
let cartaVirada2Txt
let jogadas = 0
let final = 0
let q = 0
let paraRelogio = 0

numeroCartas()

function numeroCartas() {
  let n = prompt('Com quantas cartas deseja jogar?')

  if (n % 2 === 0 && n >= 4 && n <= 14) {
    for (i = 0; i < n / 2; i++) {
      cartasJogo.push(cartas[i])
      cartasJogo.push(cartas[i])
    }

    cartasJogo.sort(comparador)

    document.querySelector('.cards').innerHTML = ''
    for (i = 0; i < cartasJogo.length; i++) {
      document.querySelector('.cards').innerHTML =
        document.querySelector('.cards').innerHTML + cartasJogo[i]
    }
    paraRelogio = setInterval(relogio, 1000)
  } else {
    numeroCartas()
  }
}

function virarCarta(element) {
  //Testar para saber se carta clicada é passível de ser virada
  if (
    element.querySelector('.front').classList.contains('escondido') &&
    cartaVirada2 === undefined
  ) {
    element.querySelector('.back').classList.add('escondido')
    element.querySelector('.front').classList.remove('escondido')
    element.classList.add('giro')

    //Saber se é a primeira ou segunda carta virada
    if (cartaVirada1 === undefined) {
      cartaVirada1Txt = element.innerHTML
      cartaVirada1 = element.querySelector('.front')
    } else {
      cartaVirada2Txt = element.innerHTML
      cartaVirada2 = element.querySelector('.front')
    }
  }

  //Saber se deve entrar na função para comparar cartas viradas
  if (cartaVirada2 !== undefined) {
    if (cartaVirada1Txt === cartaVirada2Txt) {
      compararCartas() //se cartas iguais, vai logo para a função compararCartas
    } else {
      setTimeout(compararCartas, 1000) //se não, espera um segundo para virar as cartas
    }
  }
}

function compararCartas() {
  //contador do número de jogadas (sempre que duas cartas são viradas)
  jogadas = jogadas + 1
  if (
    cartaVirada1Txt === cartaVirada2Txt &&
    cartaVirada1 !== undefined &&
    cartaVirada2 !== undefined
  ) {
    //se iguais, mantêm o estado virada e limpa variáveis para serem usadas na função anterior
    cartaVirada1Txt = ''
    cartaVirada1 = undefined
    cartaVirada2Txt = ''
    cartaVirada2 = undefined
    //conta os pares encontrados para marcar o fim do jogo
    final = final + 1
  } else if (cartaVirada1 !== undefined && cartaVirada2 !== undefined) {
    //desvira as cartas e limpa variáveis para serem usadas na função anterior
    cartaVirada1.classList.add('escondido')
    cartaVirada1.parentNode.querySelector('.back').classList.remove('escondido')
    cartaVirada1.parentNode.classList.remove('giro')
    cartaVirada2.classList.add('escondido')
    cartaVirada2.parentNode.querySelector('.back').classList.remove('escondido')
    cartaVirada2.parentNode.classList.remove('giro')
    cartaVirada1Txt = ''
    cartaVirada1 = undefined
    cartaVirada2Txt = ''
    cartaVirada2 = undefined
  }

  //vai na função endGame testar se o jogo acabou
  setTimeout(endGame, 500)
}

function endGame() {
  if (final === cartasJogo.length / 2) {
    // se todos os pares forem encontrados (numero de cartas/2)
    clearInterval(paraRelogio)
    alert(`Parabéns! Você ganhou o jogo em ${jogadas} jogadas e ${q} segundos!`)
    jogarNovamente() //pergunta se quer jogar de novo
  }
}

function jogarNovamente() {
  let novamente = prompt('Deseja jogar novamente?')
  if (novamente === 'sim' || novamente === 'Sim') {
    //limpa variáveis para novo jogo
    document.querySelector('.cards').innerHTML = ''
    cartasJogo = []
    final = 0
    jogadas = 0
    q = 0 //relogio
    numeroCartas()
  } else if (novamente === 'não' || novamente === 'Não') {
    clearInterval(paraRelogio) //para o relogio
  } else {
    alert(`Favor responder com "sim" ou "não"`)
    jogarNovamente()
  }
}

function relogio() {
  q = q + 1
  document.querySelector('.relogio').innerHTML = `${q}`
}

function comparador() {
  return Math.random() - 0.5
}
