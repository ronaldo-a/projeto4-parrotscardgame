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
  element.querySelector('.back').classList.toggle('escondido')
  element.querySelector('.front').classList.toggle('escondido')
}

function comparador() {
  return Math.random() - 0.5
}
