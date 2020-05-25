
// //button pressed, toggles between showing and hiding content
let coll = document.getElementsByClassName("collapsible")[0];
let task = document.getElementsByClassName("item")[0];
// let entry = document.getElementById("item");
console.log('is this working?')

//asks for and enters task into box
function taskAlert() {
    let txt;
    let todo = prompt("Please enter a task.");
    if (todo == null || todo == "") {
        txt = "User cancelled todo addition.";
    } else {
        txt = $('#content').innerHTML
    }
}


document.addEventListener("DOMContentLoaded", () => {
    $('.first-add').click(() => {
        taskAlert();
    })

    coll.addEventListener("click", () => {
        console.log(this.classList)
        console.log(this)
        $('#content').toggle();
        let content = this.nextElementSibling;
    });
});


