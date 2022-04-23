var startDate = Date.now();

document.addEventListener("DOMContentLoaded", () => {
    var domDate = Date.now();
    console.log(domDate - startDate);
});

window.addEventListener("load", () => {
    var loadDate = Date.now();
    console.log(loadDate - startDate);
});