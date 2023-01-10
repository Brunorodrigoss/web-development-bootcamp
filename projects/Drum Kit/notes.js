function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

//debugger;
//calculator(3,4,multiply);

var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

console.log(houseKeeper1);


// Constructor Function
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellboy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var houseKeeper2 = new HouseKeeper(9, "Leo", ["lobby", "bedroom"]);


console.log(houseKeeper2.name)