const tbody = document.getElementById("tbody");
// popup handling
const popup = document.querySelector(".popup");
// handle form submission 
const form = document.getElementById("form");

let employeeId = 1; // 2

function addEmployee(employeeObj) {
    // takes an employee object are parameter adds that data into table
    /**
     <tr>
        <td>1</td>
        <td>Aravind</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
     */
    const tr = document.createElement("tr");
    // <tr><td>1003</td></tr>

    const employeeIdCell = document.createElement("td");
    employeeIdCell.innerText = employeeId++; // 1
    // <td>1003</td>

    tr.appendChild(employeeIdCell);

    for (let key in employeeObj) {
        const cell = document.createElement("td");
        cell.innerText = employeeObj[key];
        // key = "companyName"
        // employeeObj["companyName"]
        tr.appendChild(cell);
    }

    /**
     * <td>
     *      <button>delete</button>
     *      <button>edit</button>
     * </td>
     */
    const actionsCell = document.createElement("td");
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    const editButton = document.createElement("button")
    editButton.innerText = "Edit";

    deleteButton.addEventListener("click", deleteRecord);
    editButton.addEventListener("click", editRecord);

    actionsCell.append(deleteButton, editButton);

    tr.appendChild(actionsCell);

    tbody.appendChild(tr);
}

function togglePopup() {
    // toggles the popup
    if (popup.style.display === "none") {
        popup.style.display = "flex";
        form.phoneNumber.value = 3983033030;
    }
    else {
        popup.style.display = "none";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let employee = {
        name: form.name.value,
        role: form.role.value,
        salary: form.salary.value,
        phoneNumber: form.phoneNumber.value,
        email: form.email.value,
        companyName: form.companyName.value
    }
    addEmployee(employee);
    form.reset();
    togglePopup();
})


function deleteRecord(e) {
    // event listener callback for the delete button
    // e.target = > will be the delete button on which user clicks 
    let tr = e.target.parentNode.parentNode;
    tr.remove();
}

function editRecord(e) {
    // event listener callback for the edit button 
    console.log(e.target);

    // TODO: homework
    // TODO: show a popup with the pre filled data of the record , submitting it will update the record in table.
}
