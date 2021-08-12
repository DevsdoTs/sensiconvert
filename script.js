const games = ['CS:GO', 'Fortnite', 'Apex Legends','Battlefield V', 'Overwatch', 'Valorant'];

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
  let gameSensOut = document.getElementById('sensOut').value;

  gameSensOut = sensIn.addEventListener('change', function () {
    let sensInValue = parseFloat(sensIn.value);
    let gameInValue = gameIn.value;
    let gameOutValue = gameOut.value;
    
    let sensCs = convertingToCs(gameInValue, sensInValue);
    return convertingFromCs(gameOutValue, sensCs);

  })

}

function convertingToCs(gameInValue, sensInValue) {
  let sensCS = gamesIn[gameInValue].base + ((sensInValue - 1) * gamesIn[gameInValue].offset);
  return sensCS;
}

function convertingFromCs(gameOutValue, sensCS){
  let sensOut = gamesOut[gameOutValue].base + ((sensCS - 1) * gamesOut[gameOutValue].offset);
  return sensOut;
}

const gamesIn = {
  'CSGO': {
    base: 0,
    offset: 1
  },
  'Apex Legends': {
    base: 0,
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
    base: 0.841667,
    offset: 0.841667
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

