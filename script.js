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
  } else {
    numeroCartas()
  }
}

function virarCarta(element) {
  if (
    element.querySelector('.front').classList.contains('escondido') &&
    cartaVirada2 === undefined
  ) {
    element.querySelector('.back').classList.add('escondido')
    element.querySelector('.front').classList.remove('escondido')

    if (cartaVirada1 === undefined) {
      cartaVirada1Txt = element.innerHTML
      cartaVirada1 = element.querySelector('.front')
    } else {
      cartaVirada2Txt = element.innerHTML
      cartaVirada2 = element.querySelector('.front')
    }
  }

  if (cartaVirada2 !== undefined) {
    if (cartaVirada1Txt === cartaVirada2Txt) {
      compararCartas()
    } else {
      setTimeout(compararCartas, 1000)
    }
  }
}

function compararCartas() {
  if (cartaVirada1Txt === cartaVirada2Txt) {
    cartaVirada1.classList.add('matched')
    cartaVirada2.classList.add('matched')
    cartaVirada1Txt = ''
    cartaVirada1 = undefined
    cartaVirada2Txt = ''
    cartaVirada2 = undefined
  } else {
    cartaVirada1.classList.add('escondido')
    cartaVirada1.parentNode.querySelector('.back').classList.remove('escondido')
    cartaVirada2.classList.add('escondido')
    cartaVirada2.parentNode.querySelector('.back').classList.remove('escondido')
    cartaVirada1Txt = ''
    cartaVirada1 = undefined
    cartaVirada2Txt = ''
    cartaVirada2 = undefined
  }
}

function comparador() {
  return Math.random() - 0.5
}
