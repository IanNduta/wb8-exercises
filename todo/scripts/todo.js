"use strict";


const subitBtn = document.getElementById("subitBtn");

window.onload = () =>{
    // console.log("hi");
    subitBtn.onclick = onClickedSubitBtn;
    
}

function onClickedSubitBtn(){
    console.log("hi");
    console.log("hi");
    postNewUserData();

}

function postNewUserData(){
    let userData = {
        userId: document.getElementById("userId").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value,
    }

    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {"Content-type":
                    "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    .catch(err =>{
        console.log("error");
    })
}