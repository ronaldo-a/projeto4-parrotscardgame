let cartas = [
  'carta1',
  'carta2',
  'carta3',
  'carta4',
  'carta5',
  'carta6',
  'carta7'
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
}

function comparador() {
  return Math.random() - 0.5
}
