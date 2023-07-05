let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
for(let i = 1; i <= rows; i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class", "address-col");
    addressCol.innerText = i;
    addressColCont.appendChild(addressCol);
}

let addressRowCont = document.querySelector(".address-row-cont");
for(let i = 0; i < cols; i++) {
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row");
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRowCont.appendChild(addressRow);
}

let cellsCont = document.querySelector(".cells-cont");
for(let i = 0; i < rows; i++) {
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class", "row-cont");
    for(let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");
        addEventListenerForAddressBarDisplay(cell, i, j);
        rowCont.appendChild(cell);
    }
    cellsCont.appendChild(rowCont);
}

let addressBar = document.querySelector(".address-bar");
function addEventListenerForAddressBarDisplay(cell, i, j) {
    cell.addEventListener("click", (e) => {
        let colID = String.fromCharCode(65 + j);
        let rowId = i + 1; //Since we started our i from 0.
        let address = colID + rowId;
        addressBar.value = address;
    })
}
