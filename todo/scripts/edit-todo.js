"use strict";

const subitBtn = document.getElementById("subitBtn");
const restBtn = document.getElementById("restBtn");

window.onload = () => {
    console.log("hi");
    subitBtn.onclick = onClickedSubitBtn;
    restBtn.onclick = onClickcedRestBtn;



}

function onClickedSubitBtn(){
    console.log("hi");
    updateDataInTheApi();

}

function updateDataInTheApi(){
    let userData = {
        userId: document.getElementById("userId").value,
        id: document.getElementById("courseId").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value,
    }
    
    let newUserData = JSON.stringify(userData);

    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "PUT",
        body: newUserData,
        headers: {"Content-type":
            "application/json; charset=UTF-8"}
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);

    })
}

function onClickcedRestBtn(){
    console.log("hi");
    let a = document.createElement("a");
    a.innerHTML = "Rest";
    a.href = "new-todo.html";

    restBtn.appendChild(a);
}