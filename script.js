const games = ['CSGO', 'Fortnite', 'Apex Legends', 'Battlefield V', 'Overwatch', 'Valorant'];

function createOptionGames(selector) {
  for (let index in games) {
    let gamesSelect = document.createElement('option');
    gamesSelect.innerHTML = games[index];
    document.getElementById(selector).appendChild(gamesSelect);
  }
}

createOptionGames('gameIn');
createOptionGames('gameOut');


function converting() {
  const sensIn = document.getElementById('sensIn');
  const gameIn = document.getElementById('gameIn');
  const gameOut = document.getElementById('gameOut');

  // sensIn.addEventListener('change', function () {
  let sensInValue = parseFloat(sensIn.value);
  let gameInName = gameIn.value;
  let gameOutName = gameOut.value;
  console.log(`sensIn ${sensInValue}, gameIn ${gameInName}, gameOutName ${gameOutName}`);
  let sensCs = convertingToCs(gameInName, sensInValue);

  document.getElementById('sensOut').value = convertingFromCs(gameOutName, sensCs);

// })

}

function convertingToCs(gameName, sensInValue) {
  let sens = gamesIn[gameName].base + ((sensInValue - 1) * gamesIn[gameName].offset);
  return sens;
}

function convertingFromCs(gameOutValue, sensCS) {
  let sensOut = gamesOut[gameOutValue].base + ((sensCS) * gamesOut[gameOutValue].offset);
  return sensOut;
}

const gamesIn = {
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


const gamesOut = {
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

