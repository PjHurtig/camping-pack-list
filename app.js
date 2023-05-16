let addBtn = document.getElementById("add-btn");
let userList = document.getElementsByClassName("user-list");
let inputGear = document.getElementsByClassName("input-gear");

// add button to add gear to user list from text input
addBtn.addEventListener("click", function () {
    let gear = document.createElement("div");
    userList.appendChild(gear);
});