document.firstElementChild;
document.lastElementChild;

document.firstElementChild.firstElementChild;
document.firstElementChild.lastElementChild;

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good Bye";
heading.style.color = "red";
document.querySelector("input").click();

document.getElementsByTagName("li");
document.querySelector("li");
document.querySelectorAll("li");
document.getElementsByTagName("li")[2].style.color= "purple";


document.getElementsByTagName("li").length;
document.getElementsByClassName("btn");
document.getElementById("title");

document.getElementById("title");
document.getElementById("title").innerHTML = "Heey!";
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a");
document.querySelector("li a");
document.querySelector("li.item");


document.querySelectorAll(".item")[1].style.color = "green";
document.querySelector("h1").style.fontSize = "10rem";
document.querySelector(".btn").style.backgroundColor = "yellow";
document.querySelector("h1").style.display = "hidden";
document.querySelector("h1").style.visibility = "hidden";
document.querySelector("h1").style.visibility = "visible";

document.querySelector("button").classList;
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("h1").classList.add("huge");