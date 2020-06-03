


const movieContainer = document.getElementsByClassName("movies-container")[0];
const movie = document.getElementsByClassName("movie")[0];



//takes parameter imdbID for onclick attribute later in doc.
function saveToWatchList(imdbID) {
        // movieData = response.data.Search;
    const movie = movieData.find(function(currentMovie){
                return currentMovie.imdbID == imdbID;
            }); 
let watchlistJSON = localStorage.getItem("watchlist");
let watchlist = JSON.parse(watchlistJSON);
if (watchlist == null) {
    watchlist = [];
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);
}
else {
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);
}

};




function removeFromWatchList(imdbID) {
    let watchlistJSON = localStorage.getItem("watchlist");
    let watchlist = JSON.parse(watchlistJSON);
    console.log(watchlist);
    watchlist = watchlist.filter(function(movie) {    
            return movie.imdbID != imdbID
        });
        console.log(watchlist);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem("watchlist", watchlistJSON);
        }

        


// function buttonEvents() {        
//     $(".buttonChange").on("click", function() {             //saves to watchlist BUT changes button text for ALL BUTTONS ==> PREVENTS ADDING ANY MORE MOVIES
//         console.log('this first')
//         saveToWatchList();                            //DOES NOT DISPLAY NEW BUTTON TEXT ON FIRST CLICK
//         $('.buttonChange').text('Remove Movie')              //VALUE OF ADDED ELEMENTS IN ARRAY IS NULL -- CAN'T ACCESS 'IMDBID'
//     });
//         $('.buttonChange').on("click", function() {         //DOESN'T CHANGE TEXT BACK 
//             console.log('then this')
//             removeFromWatchList();                   
//             $('.buttonChange').text('Add Movie');
//         })            
// }       
      


//execute after doc loaded
document.addEventListener("DOMContentLoaded", function() {
    function renderMovies(movieArray) {
        //take in array of movies
        //return string of HTML like that in step 1
        let movieHtmlArray = movieArray.map( function(currentMovie){
            return `<div class="card m-3" style="width:12rem">
            <img class="card-img-top" id="poster" src="${currentMovie.Poster}"/>
            <div class="card-body">
                <div class="card-title d-flex justify-content-between">
                    <h3 class="ml--3" >${currentMovie.Title}</h3>
                    <h4 class="mr--3">${currentMovie.Year}</h4>
                </div>
                <div id="b"><button onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary btn-sm buttonChange">Add Movie</button></div>
            </div>
            </div>`
        })
        return movieHtmlArray.join(``);
    }
    const myForm = document.getElementById("search-form");
    myForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let searchString = $(".search-bar").val();
        let urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString).then(function(response) {
            movie.innerHTML = renderMovies(response.data.Search);
            movieData = response.data.Search;
            return movieData;
            
        });
        
    });
    
});
            


            
// function watchlistEvents() {        
// $(".buttonChange").on("click", function() {                     //upon click, text changes to "remove movie" and add movie fn  tasks run
// const movie = movieData.find(function(currentMovie){
//     return currentMovie.imdbID == imdbID;
// }); 
// $(".buttonChange").text("Remove Movie")
//         let watchlistJSON = localStorage.getItem("watchlist");
//         let watchlist = JSON.parse(watchlistJSON);
//         if (watchlist == null) {
// watchlist = [];
// watchlist.push(movie);
// watchlistJSON = JSON.stringify(watchlist);
// localStorage.setItem("watchlist", watchlistJSON);
// }
// else {
// watchlist.push(movie);
// watchlistJSON = JSON.stringify(watchlist);
// localStorage.setItem("watchlist", watchlistJSON);
// }
// })

// $(".buttonChange").on("click", function() {                  //click it again, it says "add movie" and runs remove movie fn tasks
// $(".buttonChange").html("Add Movie")
// let watchlistJSON = localStorage.getItem("watchlist");
// let watchlist = JSON.parse(watchlistJSON);
// console.log(watchlist);
// watchlist = watchlist.filter(function(movie) {    
// return movie.imdbID != imdbID
// });
// console.log(watchlist);
// watchlistJSON = JSON.stringify(watchlist);
// localStorage.setItem("watchlist", watchlistJSON);
// movie.innerHTML = renderMovies(JSON.parse(localStorage.getItem("watchlist")));
// });
// };