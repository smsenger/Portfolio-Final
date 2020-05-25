
// //button pressed, toggles between showing and hiding content
let coll = document.getElementsByClassName("collapsible");
let task = document.getElementsByClassName("item")[0];
// let entry = document.getElementById("item");

//asks for and enters task into box
function taskAlert() {
    let txt;
    console.log('after text');
    let item = prompt("Please enter a task.");
    console.log('after prompt');
    if(item == null || item == "") {
        txt ="User cancelled todo addition.";
        console.log('null')
    } else {
        txt = item;
        console.log(txt);
    }
    $(todoList).push(txt);
}

$(document).ready(() => {
$('.first-add').click(() => {
    taskAlert();
})
});
   
    
document.addEventListener("DOMContentLoaded", () => { 
    function renderTasks(taskArray) {
        let taskHTMLArray = taskArray.map((currentEvent) => {
            return `<div class="outer-div">
            <form>
                <div class="form-row">
                    <div class="col" id="format-form2">
                        <input type="text" class="form-control" id="description" name="item" placeholder="DetailSpace" style="border-radius: 0;">
                        <input type="submit" value="Add">
                    </div>
                </div>
            </form>
    
            <div class="task-item" id="todo">
                To do: ${currentEvent.todo}
            </div>
    
            <div class="button-div1">
                <button type="button" value="click" class="collapsible button button5"><strong>Click</strong> for task
                    details</button>
                <div class="content">
                    <p>
                        ${currentEvent.details}
                    </p>
                </div>
            </div>
    
            <div class="button-div2">
                <button type="button" class="delete"><strong>Click</strong> to delete task</button>
            </div>
        </div>
            `
        })
        return taskHTMLArray.join("");
    }
    function pullDownButton() {
        let i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
    } 

    function getTodos() {
        $.get('/api/todos').then((data) => {
            $(".Container").html(renderTasks(data))
            pullDownButton();
        }) 
    } 
    getTodos()
});


    //fn that takes data and renders each task to screen
    // content.innerHTML = $(".description").val();