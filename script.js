const gameList = document.querySelector(".gameList");
const loaderEl = document.getElementById("js-preloader");
const loadMoreGamesBtn = document.querySelector(".main-button")
let nextGameListUrl = null;

const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2024-01-01,today&ordering=-added`

function loadGames(url){
    loaderEl.classList.remove("loaded");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}
// load games
loadGames(url);

