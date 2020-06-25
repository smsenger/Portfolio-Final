const movieContainer = document.getElementsByClassName("movies-container")[0];
const movie = document.getElementsByClassName("movie")[0];


//takes parameter imdbID for onclick attribute later in doc.
function saveToWatchList(imdbID) {
    const movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID == imdbID;
    });
    let watchlistJSON = localStorage.getItem("watchlist");
    let watchlist = JSON.parse(watchlistJSON);
    let watchlistMovie = watchlist.find(currentMovie => currentMovie.imdbID == imdbID)
    console.log(watchlist)
    if (watchlist == null) {
        watchlist = [];
        watchlist.push(movie);
        $(`#${imdbID}`).text('Remove Movie');
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem("watchlist", watchlistJSON);
    }

    else if (!watchlistMovie) {
        watchlist.push(movie);
        $(`#${imdbID}`).text('Remove Movie');
        watchlistJSON = JSON.stringify(watchlist)
        localStorage.setItem("watchlist", watchlistJSON)
    }
    else if ($(`#${imdbID}`).text() == 'Remove Movie') {
        $(`#${imdbID}`).text('Add Movie');
        removeFromWatchListSearch(imdbID)
    }

};

function removeFromWatchListSearch(imdbID) {
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    console.log(watchlist);
    watchlist = watchlist.filter(function (movie) {
        return movie.imdbID != imdbID
    });
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}



//execute after doc loaded
document.addEventListener("DOMContentLoaded", function () {
    //Renders the button text differently if movie on watchlist
    // function renderButton() {
    //     let watchlistJSON = localStorage.getItem("watchlist");
    //     let watchlist = JSON.parse(watchlistJSON);
    //     let watchlistMovie = watchlist.find(currentMovie => currentMovie.imdbID == imdbID)
    //     if (watchlistMovie) {
    //         $('#imdbID').text('Remove Movie');
    //     }
    // }
    function renderMovies(movieArray) {
        //take in array of movies
        //return string of HTML like that in step 1
        let movieHtmlArray = movieArray.map(function (currentMovie) {
            return `<div class="card m-3" style="width:12rem">
            <img class="card-img-top" id="poster" src="${currentMovie.Poster}"/>
            <div class="card-body">
            <div class="card-title d-flex justify-content-between">
            <h3 class="ml--3" >${currentMovie.Title}</h3>
            <h4 class="mr--3">${currentMovie.Year}</h4>
            </div>
            <div id="b">
            <button id="${currentMovie.imdbID}" onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary btn-sm buttonChange">Add Movie</button>
            </div>
            </div>
            </div>`
        })
        return movieHtmlArray.join(``);
    }
    const myForm = document.getElementById("search-form");
    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let searchString = $(".search-bar").val();
        let urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("https://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString).then(function (response) {
            movie.innerHTML = renderMovies(response.data.Search);
            movieData = response.data.Search;
            return movieData;
        });
    });
});