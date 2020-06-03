
const movieContainer = document.getElementsByClassName("movies-container")[0];
const movie = document.getElementsByClassName("movie")[0];



// document.addEventListener('DOMContentLoaded', function() {
// });
        function renderMovies(movieArray) {
            //take in array of movies
            //return string of HTML like that in step 1
            let movieHtmlArray = movieArray.map(function(currentMovie){
                return `<div class="card m-3" style="width:12rem">
                <img class="card-img-top" id="poster" src="${currentMovie.Poster}"/>
                            <div class="card-body">
                            <div class="card-title d-flex justify-content-between">
                            <h3 class="ml--3" >${currentMovie.Title}</h3>
                            <h4 class="mr--3">${currentMovie.Year}</h4>
                            </div>
                            <div id="b"><button onclick="removeFromWatchList('${currentMovie.imdbID}')" class="btn btn-primary btn-sm">Remove Movie</button></div>
                            </div>
                            </div>`
                        })
                        return movieHtmlArray.join(``);
                    }
                    movie.innerHTML = renderMovies(JSON.parse(localStorage.getItem('watchlist')));




function removeFromWatchList(imdbID) {
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    console.log(watchlist);
    watchlist = watchlist.filter(function(movie) {    
        return movie.imdbID != imdbID
    });
    console.log(watchlist);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    movie.innerHTML = renderMovies(JSON.parse(localStorage.getItem('watchlist')));
}





