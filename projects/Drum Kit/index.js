var buttons = document.querySelectorAll("button.drum");

for (var index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
        alert("I got clicked");
    });
}