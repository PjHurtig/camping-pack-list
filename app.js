let addBtn = document.getElementById("add-btn");
let userList = document.getElementsByClassName("user-list");
let inputGear = document.getElementsById("input-gear");

// add button to add gear to user list from text input
addBtn.addEventListener("click", function () {
    let gear = document.createElement("div");
    userList.appendChild(gear);
    // add paragraph with gear item text
    let gearText = document.createElement("p");
    gearText.innerText = inputGear.value;
    gear.appendChild(gearText);
});