document.addEventListener("DOMContentLoaded", function () {

    let addBtn = document.getElementById("add-btn");
    let userList = document.getElementById("user-list");
    let inputGear = document.getElementById("input-gear");
    const defaultItems = ["Backpack", "Shelter (tent/hammock/tarp/bivvy)", "Sleeping system (sleeping-bag, quilt)",
        "Water (1 litre/day)", "Headlight (extra batteries)", "Fire (matches, lighter, steel)", "Knife"];


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

    // function for deleteBtn, removes item from user list (after user confirm)
    function deleteItem(gear) {
        const confirmDelete = confirm("Delete this item?");
        if (confirmDelete === true) {
            userList.removeChild(gear);
        }

    }

    // function for editBtn, allow edit text in paragraph
    function editItem(gearText) {
        gearText.contentEditable = true;
        gearText.focus();
    }

    // function for saveBtn, disallow edit text in paragraph
    function saveItem(gearText) {
        gearText.contentEditable = false;
    }

    function addButtonsToItem(gear, gearText) {
        // adds delete-button to gear in user list
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        // delete-button: when clicked, removes gear item from user list
        deleteBtn.addEventListener("click", function () {
            deleteItem(gear);
        });
        gear.appendChild(deleteBtn);

        // adds edit-button to gear in user list
        const editBtn = document.createElement("button");
        editBtn.textContent = "edit";
        // edit-button: when clicked, makes gear item text editable
        editBtn.addEventListener("click", function () {
            editItem(gearText);
        });
        gear.appendChild(editBtn);

        // adds save-button to save changes made with edit button
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "done";
        // save-button: when clicked makes gear text not editable
        saveBtn.addEventListener("click", function () {
            saveItem(gearText);
        });
        gear.appendChild(saveBtn);
    }

    // adds item div and paragraph with gear item text
    function updateItemList(newItem, defaultItems) {
        const gear = document.createElement("div");
        const gearText = document.createElement("p");
        gearText.innerText = newItem;
        gear.appendChild(gearText);
        userList.appendChild(gear);
        addButtonsToItem(gear, gearText);
    }

    // adds item list with gear item text
    function addNewItem() {
        const newItem = getItemValue();
        if (newItem !== false) {
            updateItemList(newItem);
            // remove text from input field after adding
            inputGear.value = "";
        }
    }

    // creates list items of defaultitems-array in top of document
    function addDefaultItems() {
        defaultItems.forEach(function (defaultItem) {
            updateItemList(defaultItem);
        });
    }

    // adds gear to user list from text input field when "add" button is clicked
    addBtn.addEventListener("click", addNewItem);

    // press enter to add item functionality 
    // code from love-maths project(https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode)
    inputGear.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addNewItem();
            inputGear.focus();
        }
    });

    addDefaultItems();

});