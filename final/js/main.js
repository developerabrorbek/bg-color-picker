"use strict";

function changeElBgColor(el, color = "#ffffff") {
    el.style.background = color;
}

const elForm = document.getElementById("color-picker")

elForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const color = e.target.color.value;
    const el = document.body;
    changeElBgColor(el, color);
})

elForm.addEventListener("reset", (e) => {
    e.preventDefault();
    const el = document.body;
    changeElBgColor(el);
})