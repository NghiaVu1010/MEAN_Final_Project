/*
* Description: Add basic functionality for settings
*
* Author: Neo
*/
"use strict";

/*
* Dynamically generate delete modal
* 
* @param newP (Object) - Create an element to append
*/
function createDeleteModal(user) {
    let newP = $("<p>", {text: "Are you sure you want to delete your profile?"});

    $(".modal-body").empty();
    $(".modal-title").text(user.username);
    $(".modal-body").append(newP);
}

/*
*  PUT request to update profile settings
*/
function updateProfile(dataObj, id) {
    $.ajax({
        type: "PUT",
        url: "http://localhost:3000/users/settings/" + id,
        data: dataObj
        })
        .done(function() {
            location.reload();
            //console.log("Update Successful")
        })
        .fail(function() {
            $("#errMsg").html("Update failed!")
        });

    return false;
}

/*
*  DELETE request to delete profile
*/
function deleteProfile(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/users/settings/" + id
        })
        .done(function() {
            location.href = "/";
            //console.log("Delete Successful")
        })
        .fail(function() {
            $("#errMsg").html("Delete failed!")
        });

    return false;
}

$(function() {
    // Parses the local storage for user
    let user = JSON.parse(localStorage.getItem("user"));

    $("#inputEmail").val(user.email);

    // Updates the profile on submit
    $("#updateForm").on("submit", (e) => {
        e.preventDefault();

        let data = {
            "email": $("#inputEmail").val()
        };

        // Updates profile server side
        updateProfile(data, user.id);

        // Updates local storage
        user.email = $("#inputEmail").val();
        localStorage.setItem("user", JSON.stringify(user));
    });

    // Cancel
    $("#cancelProBtn").on("click", () => {
        location.href = "/teams";
    });
    
    $("#deleteProBtn").on("click", () => {
        createDeleteModal(user);
        $("#deleteModal").modal(focus);
    });

    $("#confirmModalBtn").on("click", () => {
        deleteProfile(user.id);
    });
});