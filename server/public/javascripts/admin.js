/*
* Description: Add basic functionality for admin
*
* Author: Neo
*/
"use strict";

/*
* Handle data to be displayed
*/
function displayData(list) {
    let empty = true;

    for(let i = 0; i < list.length; i++) {
        insertTableRow(list[i]);
        empty = false;
    }

    // Check to see if there were no teams found
    $("#emptyDiv").empty();
    if(empty == true) {
        let emptyElement = $("<p>", {text: "No users founds!", class: "text-center white"});
        $("#emptyDiv").append(emptyElement);
    }
}

/*
* Insert data into table with a new row
* 
* @param newRow (Object) - Create a blank row to be appended
* @param usernameElement (Object) - Create a cell for username
* @param emailElement (Object) - Create a cell for email
*/
function insertTableRow(list) {
    // Create row to append interested data
    let newRow = $("<tr>");

    // Create interested elements to be appended
    let usernameElement = $("<td>", {text: list.username});
    let emailElement = $("<td>", {text: list.email})

    // Append the row to the body
    $("#teamBody").append(newRow);

    // Append interested elements
    newRow.append(usernameElement)
        .append(emailElement);
}

$(function() {
    $.getJSON("http://localhost:3000/admin/data", (data) => {
        displayData(data);
    })
});