function addCTClient() {
    var table = document.getElementById("CT_Client_Table");  
    var numberRows = table.rows.length;
    console.log(table.rows.length);
    var newClientRow = table.insertRow(numberRows);
    var newCell0 = newClientRow.insertCell(0);
    var newCell0Content = document.getElementById("bagCheckbox").cloneNode(true);
    newCell0Content.removeAttribute("id");
    newCell0.appendChild(newCell0Content);
    var newNameString = "bagDelivered".concat(numberRows.toString());
    newCell0Content.name = newNameString;
    var newCell1 = newClientRow.insertCell(1);
    var newCell1Content = document.createElement("input");
    newCell1Content.type = "text";
    newCell1.appendChild(newCell1Content);
    newNameString = "clientName".concat(numberRows.toString());
    newCell1Content.name = newNameString;
    var newCell2 = newClientRow.insertCell(2);
    var newCell2Content = document.createElement("input");
    newCell2Content.type = "text";
    newNameString = "spouseName".concat(numberRows.toString());
    newCell2Content.name = newNameString;
    newCell2.appendChild(newCell2Content);
    var newCell3 = newClientRow.insertCell(3);
    var newCell3Content = document.getElementById("serviceSelect").cloneNode(true);
    newNameString = "service".concat(numberRows.toString());
    newCell3Content.name = newNameString;
    newCell3Content.removeAttribute("id");
    newCell3.appendChild(newCell3Content);
    var newCell4 = newClientRow.insertCell(4);
    var newCell4Content = document.getElementById("hoursCell").cloneNode(true);
    newCell4Content.removeAttribute("id");
    newCell4.appendChild(newCell4Content);
    newCell4Content.name = "hours".concat(numberRows.toString());
    var newCell5 = newClientRow.insertCell(5);
    var newCell5Content = document.getElementById("intakeCell").cloneNode(true);
    newCell5Content.removeAttribute("id");
    newCell5.appendChild(newCell5Content);
    newCell5Content.name = "intake".concat(numberRows.toString());
    var newCell6 = newClientRow.insertCell(6);
    var newCell6Content = document.getElementById("notesField").cloneNode(true);
    newCell6Content.name = "notes".concat(numberRows.toString());
    newCell6Content.removeAttribute("id");
    newCell6.appendChild(newCell6Content);
    var newCell7 = newClientRow.insertCell(7);
    var newCell7Content = document.getElementById("statusCell").cloneNode(true);
    newCell7Content.removeAttribute("id");
    newCell7Content.name = "statusJune".concat(numberRows.toString());
    newCell7.appendChild(newCell7Content);
    var newCell8 = newClientRow.insertCell(8);
    var newCell8Content = document.getElementById("statusCell").cloneNode(true);
    newCell8Content.name = "statusJuly".concat(numberRows.toString());
    newCell8Content.removeAttribute("id");
    newCell8.appendChild(newCell8Content);
    var newCell9 = newClientRow.insertCell(9);
    var newCell9Content = document.getElementById("statusCell").cloneNode(true);
    newCell9Content.removeAttribute("id");
    newCell9Content.name = "statusAugust".concat(numberRows.toString());
    newCell9.appendChild(newCell9Content);
    var newCell10 = newClientRow.insertCell(10);
    var newCell10Content = document.getElementById("statusCell").cloneNode(true);
    newCell10Content.name = "statusSeptember".concat(numberRows.toString());
    newCell10Content.removeAttribute("id");
    newCell10.appendChild(newCell10Content);
    
};

function updateClientInfo() {
    var table=document.getElementById("CT_Client_Table");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            col.innerHTML.value = col.innerHTML.value;
        }
    }
};