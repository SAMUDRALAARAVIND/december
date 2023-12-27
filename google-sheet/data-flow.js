const selectedCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("form");

const state = {};

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

    selectedCellElement.style.fontFamily = selectedValues.fontFamily;
    selectedCellElement.style.fontSize = `${selectedValues.fontSize}px`;
    selectedCellElement.style.textAlign = selectedValues.align;
    selectedCellElement.style.fontWeight = selectedValues.bold ? "bold" : "lighter";
    selectedCellElement.style.fontStyle = selectedValues.italic ? "italic" : "normal";
    selectedCellElement.style.textDecoration = selectedValues.underline ? "underline" : "none";
    selectedCellElement.style.color = selectedValues.textColor;
    selectedCellElement.style.backgroundColor = selectedValues.bgColor;

    state[selectedCell] = selectedValues;
})

let selectedCell = null;

function onCellFocus(event) {
    selectedCell = event.target.id;
    selectedCellElement.innerText = selectedCell;
    if (!state[selectedCell]) {
        // when the cell is focused for the first time 
        state[selectedCell] = defaultStyles;
    }

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