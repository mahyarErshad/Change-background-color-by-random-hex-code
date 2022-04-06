'use strict'
function changeColor(){
     let color = "#" + (Math.floor(Math.random()*16777215).toString(16));
     document.body.style.backgroundColor = color;
     document.getElementById("text").innerHTML=color
}
// 

document.getElementsByTagName("h1")[0].addEventListener("click", function(){
    let text = document.getElementById("text").innerText
    navigator.clipboard.writeText(text)
    document.getElementById("alert").style.display = "block";
    document.getElementById("alert").innerText = `Copied the color with HEX code: ${text}`;
    setTimeout(close, 2000);
    function close() {
    document.getElementById("alert").style.display = "none";
    }
});
document.querySelector("main").addEventListener("click" , function(){
    console.log("hello")
} )
// e.stopPropagation