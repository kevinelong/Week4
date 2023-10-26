"use strict";

// window.onload = function () { //old school anonymous
window.onload = () => { // modern fat arrow anounymous
    document.getElementById("helloBtn").onclick = () => {     
        document.getElementById("greeting").innerText = "Hello!!!";
    }
};