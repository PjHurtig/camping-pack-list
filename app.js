let addBtn = document.getElementById("add-btn");
let userList = document.getElementById("user-list");
let inputGear = document.getElementById("input-gear");

// adds gear to user list from text input field when "add" button is clicked
addBtn.addEventListener("click", function () {
    let gear = document.createElement("div");
    userList.appendChild(gear);

    // adds paragraph with gear item text
    let gearText = document.createElement("p");
    gearText.innerText = inputGear.value;
    gear.appendChild(gearText);

    gearText.addEventListener("click", function () {
        gearText.style.textDecoration = "line-through";
    });

    // adds delete-button to gear in user list
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    gear.appendChild(deleteBtn);

    // delete-button: when clicked, removes gear item from user list
    deleteBtn.addEventListener("click", function () {
        userList.removeChild(gear);
    });

    // adds edit-button to gear in user list
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    gear.appendChild(editBtn);

    // edit-button: when clicked, makes gear item text editable
    editBtn.addEventListener("click", function () {
        gearText.contentEditable = true;
    });

    // adds save-button to save changes made with edit button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "save";
    gear.appendChild(saveBtn);

    // save-button: when clicked makes gear text not editable
    saveBtn.addEventListener("click", function () {
        gearText.contentEditable = false;
    });

    // remove text from input field after adding
    inputGear.value = "";
});