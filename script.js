const games = ['CS:GO', 'Fortnite', 'Apex Legends', 'Battlefield V', 'Overwatch', 'PUBG', 'Valorant'];

function createOptionGames(selector) {
  for (let index in games) {
    let gamesSelect = document.createElement('option');
    gamesSelect.innerHTML = games[index];
    document.getElementById(selector).appendChild(gamesSelect);
  }
}

createOptionGames('gameIn');
createOptionGames('gameOut');

let gameSensIn;
let gameSensOut;

function getGameSensIn() {
  gameSensIn = parseFloat(document.getElementById('sensIn').value);
  gameSensOut = convertingSens(gameSensIn);
  document.getElementById('sensOut').value = gameSensOut;
  console.log(gameSensIn);
  return gameSensIn;
}

function convertingSens(gameSensIn){
  let inputGame = document.getElementById('gameIn').value;
  let outputGame = document.getElementById('gameOut').value;

  switch (inputGame) {
    case 'CS:GO':
      gameSensOut = gameSensIn + 1;
      break;
    case 'Fortnite':
      gameSensOut = gameSensIn / 10;
      break;
    default:
      gameSensOut = gameSensIn + 10;    
  }

  return gameSensOut;
}
