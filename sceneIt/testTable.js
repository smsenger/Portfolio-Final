

const movie = document.getElementsByClassName("movie")[0];
const button = document.createElement('button');
button.textContent="Add Movie";
button.type= "button";
button.className = "btn btn-primary btn-sm";
button.id= "add"
button.style.width= "20px";
movie.appendChild(button);
// button.onclick(event, function() {   
// })  



let table = document.querySelector("table");



document.addEventListener('DOMContentLoaded', function() {
    //execute after doc loaded
    function renderMovies(movieArray) {
        //take in array of movies
        //return string of HTML like that in step 1
        let movieHtmlArray = movieArray.map( function(currentMovie){
            return function generateTable(table, data) {
                for(let element of data) {
                    let row = table.insertRow();
                    for(key in element) {
                        let cell = row.insertCell();
                        let image = document.createTextNode(element[4]);
                        image.src = `"${currentMovie.Poster}"`
                        let text = `<h3>${currentMovie.Title}</h3>`
                        let text = `<h3>${currentMovie.Year}</h3>`
                        let button = document.createElement("button");
                        cell.appendChild(text);
                        button.textContent("Add Movie")
                        table.appendChild(button);
                    }
                }
            }
        });
        return movieHtmlArray.join(``);
    }
    const films = document.querySelector('.movies-container');
    // const myForm = document.getElementById('myForm');
    // myForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
    // });
    films.innerHTML = renderMovies(movieData);
});