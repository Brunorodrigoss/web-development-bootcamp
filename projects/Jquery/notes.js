$(document).ready(function() { 
    $("h1").css("color","red");
});

//https://www.minifier.org/

// document.querySelector("h1").style.color = "red"; === $("h1").css("color","red");

$("h1").css("color", "green");

console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

$("h1").css("font-size", "5rem");
console.log($("h1").css("font-size"));

$("button").css("background-color", "yellow");