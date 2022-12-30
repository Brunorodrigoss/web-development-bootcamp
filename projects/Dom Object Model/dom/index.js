document.firstElementChild;
document.lastElementChild;

document.firstElementChild.firstElementChild;
document.firstElementChild.lastElementChild;

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good Bye";
heading.style.color = "red";
document.querySelector("input").click();