var buttons = document.querySelectorAll("button.drum");

for (var index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
        this.style.color = "white";
        //var audio = new Audio("sounds/tom-1.mp3");
        //audio.play();
    });
}