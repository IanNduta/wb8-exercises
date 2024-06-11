"use strict";

const userName = document.getElementById("userName");
const studentType = document.getElementById("studentType");
const instructorType = document.getElementById("instructorType");
const submitBtn = document.getElementById("submitBtn");


window.onload = function(){
    console.log("hi");
    submitBtn.onclick = onClickedSubmitBtn;
}

function onClickedSubmitBtn(){
    console.log("hi");
}