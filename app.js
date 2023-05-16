let addBtn = document.getElementById("add-btn");
let userList = document.getElementById("user-list");
let inputGear = document.getElementById("input-gear");

// adds button to add gear to user list from text input
addBtn.addEventListener("click", function () {
    let gear = document.createElement("div");
    userList.appendChild(gear);

    // adds paragraph with gear item text
    let gearText = document.createElement("p");
    gearText.innerText = inputGear.value;
    gear.appendChild(gearText);

    // adds delete button to gear in user list
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    gear.appendChild(deleteBtn);

    // delete button when clicked, removes gear item from user list
    deleteBtn.addEventListener("click", function () {
        userList.removeChild(gear);
    });

    // adds edit button to gear in user list
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    gear.appendChild(editBtn);

    // edit button when clicked, makes gear item text editable
    editBtn.addEventListener("click", function () {
        gearText.contentEditable = true;
    });

    // remove text from input after adding
    inputGear.value = "";
});