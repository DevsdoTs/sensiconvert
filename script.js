const GAME_NAME = ['CSGO', 'Fortnite', 'Apex Legends', 'Battlefield V', 'Overwatch', 'Valorant']

const GAME_IN = {
  'CSGO': {
    base: 1,
    offset: 1
  },
  'Apex Legends': {
    base: 1,
    offset: 1
  },
  'Fortnite': {
    base: 0.2525,
    offset: 0.2525
  },
  'Valorant': {
    base: 3.181818,
    offset: 3.181818
  },
  'Overwatch': {
    base: 0.3,
    offset: 0.3
  },
  'Battlefield V': {
    base: 0.677132,
    offset: 0.156261
  }
}

const GAME_OUT = {
  'CSGO': {
    base: 0,
    offset: 1
  },
  'Apex Legends': {
    base: 0,
    offset: 1
  },
  'Fortnite': {
    base: 3.960396,
    offset: 3.960396
  },
  'Valorant': {
    base: 0.314286,
    offset: 0.314286
  },
  'Overwatch': {
    base: 3.33333,
    offset: 3.33333
  },
  'Battlefield V': {
    base: 3.066207,
    offset: 6.399541
  }
}

function createOptionGames(selector) {
  for (let index in GAME_NAME) {
    let gamesSelect = document.createElement('option')
    gamesSelect.innerHTML = GAME_NAME[index]
    let selectElement = document.getElementById(selector)
    selectElement.appendChild(gamesSelect)
  }
}

function convertingToCs(gameName, sensInValue) {
  let sens = GAME_IN[gameName].base + ((sensInValue - 1) * GAME_IN[gameName].offset)
  return sens
}

function convertingFromCs(gameName, sensCS) {
  let sensOut = GAME_OUT[gameName].base + ((sensCS - 1) * GAME_OUT[gameName].offset)
  return sensOut.toFixed(3)
}

function converting() {
  const sensIn = document.getElementById('sensIn')
  const gameIn = document.getElementById('gameIn')
  const gameOut = document.getElementById('gameOut')

  let sensInValue = parseFloat(sensIn.value).toFixed(3)
  let gameInName = gameIn.value
  let gameOutName = gameOut.value
  let sensCs = convertingToCs(gameInName, sensInValue)

  if (gameOutName === 'CSGO' | gameOutName === 'Apex Legends') {
    document.getElementById('sensOut').value = sensCs.toFixed(3)
  } else {
    document.getElementById('sensOut').value = convertingFromCs(gameOutName, sensCs)
  }
}

function swapValues() {
  const sensOut = document.getElementById('sensOut')
  const gameIn = document.getElementById('gameIn')
  const gameOut = document.getElementById('gameOut')
  const sensIn = document.getElementById('sensIn')

  let handleGameIn = gameIn.value
  gameIn.value = gameOut.value
  gameOut.value = handleGameIn

  let handleSensIn = sensIn.value
  sensIn.value = sensOut.value
  sensOut.value = handleSensIn
}
