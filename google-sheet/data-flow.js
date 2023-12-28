const selectedCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("form");

let totalSheets = 1, activeSheetName = "sheet1";

let state = {};

const defaultStyles = {
    fontFamily: "monospace",
    fontSize: 16,
    bold: false,
    italic: false,
    underline: false,
    align: "left",
    bgColor: "#ffffff",
    textColor: "#000000"
}

function applyStylesToElement(element, styles) {
    element.style.fontFamily = styles.fontFamily;
    element.style.fontSize = `${styles.fontSize}px`;
    element.style.textAlign = styles.align;
    element.style.fontWeight = styles.bold ? "bold" : "lighter";
    element.style.fontStyle = styles.italic ? "italic" : "normal";
    element.style.textDecoration = styles.underline ? "underline" : "none";
    element.style.color = styles.textColor;
    element.style.backgroundColor = styles.bgColor;
}

form.addEventListener("change", () => {
    const selectedValues = {
        fontFamily: form.fontFamily.value,
        fontSize: Number(form.fontSize.value),
        bold: form.bold.checked,
        italic: form.italic.checked,
        underline: form.underline.checked,
        align: form.align.value,
        textColor: form.textColor.value,
        bgColor: form.bgColor.value,
    }

    // apply the styles to the selected 
    const selectedCellElement = document.getElementById(selectedCell);
    applyStylesToElement(selectedCellElement, selectedValues);
    // selectedCellElement.style.fontFamily = selectedValues.fontFamily;
    // selectedCellElement.style.fontSize = `${selectedValues.fontSize}px`;
    // selectedCellElement.style.textAlign = selectedValues.align;
    // selectedCellElement.style.fontWeight = selectedValues.bold ? "bold" : "lighter";
    // selectedCellElement.style.fontStyle = selectedValues.italic ? "italic" : "normal";
    // selectedCellElement.style.textDecoration = selectedValues.underline ? "underline" : "none";
    // selectedCellElement.style.color = selectedValues.textColor;
    // selectedCellElement.style.backgroundColor = selectedValues.bgColor;

    state[selectedCell] = selectedValues;
});

let selectedCell = null;

function onCellFocus(event) {
    if (selectedCell) {
        // remove the active-cell class for the previously focused cell.
        document.getElementById(selectedCell).classList.remove("active-cell");
    }
    selectedCell = event.target.id;
    selectedCellElement.innerText = selectedCell;
    if (!state[selectedCell]) {
        // when the cell is focused for the first time 
        state[selectedCell] = defaultStyles;
    }
    // add active-cell class for the newly focuesed element.
    document.getElementById(selectedCell).classList.add("active-cell");
    applyCurrentCellStylesToForm();
}

function applyCurrentCellStylesToForm() {
    // apply styles of the current selected cell to the form.

    // form.bold.checked = state[selectedCell].bold;
    // form.italic.checked = state[selectedCell].italic;
    // form.underline.checked = state[selectedCell].underline;

    // form.align.value = state[selectedCell].align;

    // form.fontSize.value = state[selectedCell].fontSize;
    // form.fontFamily.value = state[selectedCell].fontFamily;
    // form.textColor.value = state[selectedCell].textColor;
    // form.bgColor.value = state[selectedCell].bgColor;

    for (let key in state[selectedCell]) {
        form[key].type === "checkbox" ?
            (form[key].checked = state[selectedCell][key]) :
            (form[key].value = state[selectedCell][key])
    }
}

// expression  evaluation 
const fx = document.getElementById("fx");
fx.addEventListener("keyup", (e) => {
    if ("Enter" === e.code && selectedCell) {
        let expression = fx.value;
        let result = eval(expression);
        document.getElementById(selectedCell).innerText = result;
        fx.value = "";
    }
})

/**
 * New sheet flow 
 * 
 * when user switches to new sheet 
 * i. save the old sheet's data
 * ii. clear all the cells which were effected in previous sheet.
 *    1) remove active-cell class
 *    2) remove `style` attribute
 *    3) remove innerText
 *    4) reset the form.
 */
const footForm = document.querySelector(".foot-form");

footForm.addEventListener("change", (event) => {
    let newSheetName = event.target.value;
    // save the current sheet into the localStorage
    localStorage.setItem(activeSheetName, JSON.stringify(state));
    // clear all the cells effected / edited in the current sheet
    for (let cellid in state) {
        clearCell(cellid);
    }
    // reset the state object 
    let existingData = localStorage.getItem(newSheetName);
    if (existingData) {
        state = JSON.parse(existingData);
        // sheet1 = {B1: {}, C3: {}}
        for (let cellId in state) {
            const cellElement = document.getElementById(cellId);
            applyStylesToElement(cellElement, state[cellId]);
        }
    }
    else {
        // as there's no existing data 
        state = {};
    }

    // update the active sheet name to be the selected one.
    activeSheetName = newSheetName;
})

function createNewSheet() {
    totalSheets++;
    /**
     * <div>
            <input type="radio" name="sheet" id="sheet1" />
            <label for="sheet1">Sheet1</label>
          </div>
     */
    let newSheetName = `sheet${totalSheets}`;
    const inputContainer = document.createElement("div");
    inputContainer.innerHTML = `
            <input type="radio" name="sheet" id="${newSheetName}" value="${newSheetName}" />
            <label for="${newSheetName}">${newSheetName[0].toUpperCase() + newSheetName.slice(1)}</label>
    `;

    footForm.appendChild(inputContainer);
}

function clearCell(cellId) {
    let cell = document.getElementById(cellId);
    cell.innerText = '';
    cell.removeAttribute("style");
    cell.classList.remove("active-cell");
}


/**
 * listen to onchange foot-form event
 */

