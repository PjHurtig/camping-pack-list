document.addEventListener("DOMContentLoaded", function () {

    let addBtn = document.getElementById("add-btn");
    let userList = document.getElementById("user-list");
    let inputGear = document.getElementById("input-gear");


    // checks if user input field is empty and alerts the user to enter a value
    function getItemValue() {
        const gearText = inputGear.value;
        if (gearText === "") {
            alert("No item entered");
            return false;
        } else {
            return gearText;
        }
    }


    function updateItemList(newItem) {
        const gear = document.createElement("div");
        const gearText = document.createElement("p");
        gearText.innerText = newItem;
        gear.appendChild(gearText);
        userList.appendChild(gear);
    }

    // adds item div and paragraph with gear item text
    function addNewItem() {
        const newItem = getItemValue();
        if (newItem !== false) {
            updateItemList(newItem);
            // remove text from input field after adding
            inputGear.value = "";
        }
    }

    // adds gear to user list from text input field when "add" button is clicked
    addBtn.addEventListener("click", addNewItem);


});