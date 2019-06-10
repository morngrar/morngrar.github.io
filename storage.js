"use strict"
window.onload = function() {
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.

        // Store
        let localStorage = window.localStorage;
        localStorage.setItem("lastname", "Smith");

        // Retrieve
        document.getElementById("result").innerHTML = localStorage.lastname;

        //removal
        localStorage.removeItem("lastname");

        // Stored items are always strings, and must be converted if needed
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " +
            localStorage.clickcount + " time(s).";

    } else {
        // Sorry! No Web Storage support..
    }
};

