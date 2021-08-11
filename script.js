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


