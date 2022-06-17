let cartas = [
  `<div class="card">
  <img src="imgsParrot/bobrossparrot.gif" alt="" />
</div>`,
  `<div class="card">
<img src="imgsParrot/explodyparrot.gif" alt="" />
</div>`,
  `<div class="card">
<img src="imgsParrot/fiestaparrot.gif" alt="" />
</div>`,
  `<div class="card">
<img src="imgsParrot/metalparrot.gif" alt="" />
</div>`,
  `<div class="card">
<img src="imgsParrot/revertitparrot.gif" alt="" />
</div>`,
  `<div class="card">
<img src="imgsParrot/tripletsparrot.gif" alt="" />
</div>`,
  `<div class="card">
<img src="imgsParrot/unicornparrot.gif" alt="" />
</div>`
]

let cartasJogo = []

numeroCartas()

function numeroCartas() {
  let n = prompt('Com quantas cartas deseja jogar?')

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
}

function comparador() {
  return Math.random() - 0.5
}
