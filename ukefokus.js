"use strict";

let show = 2;
let storage = null;

// Check for stored focus
window.onload = function() {
    if (typeof(Storage) !== "undefined") {
        storage = window.localStorage;

        if (storage.focus) {
            let focus_element = document.getElementById("focus");
            focus_element.innerHTML = storage.focus;
            switch_divs();
        }
    }
};


document.onkeyup = function(e) {
    if (e.which == 13) {
        if (show === 2) {
            setFocus();
        }
    } else if (e.which === 78){
        if (show === 1) {
            back();
        }
    }

};

function switch_divs() {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");

    if (show === 1) {
        div1.style.display = "block";
        div2.style.display = "none";
        show = 2;
    } else if (show === 2) {
        div1.style.display = "none";
        div2.style.display = "block";
        show = 1;
    }
}

function setFocus() {
    storage.focus = document.getElementById("focus_input").value;
    let focus_element = document.getElementById("focus");
    focus_element.innerHTML = storage.focus;
    switch_divs();
}

function back() {
    let input = document.getElementById("focus_input");
    switch_divs();
    input.value = "";
    input.focus();
}
