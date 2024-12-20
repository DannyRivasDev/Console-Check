const gameList = document.querySelector(".gameList");
const loaderEl = document.getElementById("js-preloader");
const loadMoreGamesBtn = document.querySelector(".main-button")
let nextGameListUrl = null;

// const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2024-01-01,2024-09-30&ordering=-added`

const getPlatformStr = (gameName, platforms) => {
    return platforms.map(pl => {
        const platformName = pl.platform.name;
        const ebaySearchUrl = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(gameName)}+${encodeURIComponent(platformName)}`;
        return `<a href="${ebaySearchUrl}" target="_blank">${platformName}</a>`;
    }).join("<br>");
}

const getPriceChartingUrl = (gameName) => {
    return `https://www.pricecharting.com/search-products?q=${encodeURIComponent(gameName)}`;
}

function loadGames(url){

    fetch(url)
        .then(response => response.json())
        .then(data => {
            nextGameListUrl = data.next ? data.next : null;
            const games = data.results;
    
            games.forEach(game => {
                const priceChartingUrl = getPriceChartingUrl(game.name);
                const gameItemEl = `
                <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="item">
                            <a href="${priceChartingUrl}" target="_blank">
                                <img src="${game.background_image}" alt="${game.name} image">
                            </a>
                            <h4 class="game-name">${game.name}<br><span class="platforms">${getPlatformStr(game.name, game.platforms)}</span></h4>
                            <ul>
                                <li><i class="fa fa-star"></i> <span class="rating">${game.rating}</span></li>
                                <li><i class="fa-regular fa-calendar"></i> <span class="date">${game.released}</span></li>
                            </ul>
                            <span><a href="${priceChartingUrl}" target="_blank">Price Charting</a></span>
                        </div>
                        </div>
                `
                gameList.insertAdjacentHTML("beforeend", gameItemEl)
            });
            loaderEl.classList.add("loaded");
            if (nextGameListUrl) {
                loadMoreGamesBtn.classList.remove("hidden");
            } else {
                loadMoreGamesBtn.classList.add("hidden");
            }
        })
        .catch(error => {
            console.log("An error occurred:", error);
        });
}
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function searchGames() {
        const query = searchInput.value;
        const api = "51a0a8acf6a64feb8ee6eefdfd2e254f";
        const searchURL = `https://api.rawg.io/api/games?key=${api}&search=${query}`;
        console.log("Search URL:", searchURL);
        loadGames(searchURL);
    }

    searchButton.addEventListener('click', searchGames);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchGames();
        }
    });
});

