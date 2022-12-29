prompt("Enter the name 1");
prompt("Enter the name 2");

var score = Math.random() * 100;
score = Math.floor(score) + 1;

if (score > 70) {
    alert(" Your score is " + score + "%. Amazing!");
} else {
    alert(" Your score is " + score + "%");
}

