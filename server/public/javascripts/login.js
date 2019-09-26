/*
* Description: Add basic functions
*
* Author: Neo
*/
"use strict";

$(function() {
    $("#signinForm").on("submit", (e) => {
        e.preventDefault();

        let data = {
            "username": $("#inputUser").val(),
            "password": $("#inputPassword").val()
        };
        
        $.post("http://localhost:3000/users/login", data, () => {})
            .done(function(res) {
                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(res));

                location.href = "/teams";
                //console.log("Login success");
            })
            .fail(function() {
                $("#errMsg").html("Incorrect login info!")
                //console.log("Login failed");
            })
    });
});