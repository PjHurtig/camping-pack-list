document.addEventListener("DOMContentLoaded", function () {

    let addBtn = document.getElementById("add-btn");
    let userList = document.getElementById("user-list");
    let inputGear = document.getElementById("input-gear");

    function getItemValue() {
        const gearText = inputGear.value;
        if (gearText === "") {
            alert("No item entered");
            return false;
        } else {
            return gearText;
        }
    }



    function addNewItem() {
        const newItem = getItemValue();
        if (newItem !== false) {
            const gear = document.createElement("div");
            const gearText = document.createElement("p");
            gearText.innerText = newItem;
            gear.appendChild(gearText);
            userList.appendChild(gear);
        }
    }


    addBtn.addEventListener("click", addNewItem);


});