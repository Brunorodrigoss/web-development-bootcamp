function getMilk(value) {
    var bottles = Math.floor(value / 1.5);
    
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("tou can buy " + parseInt(bottles) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

getMilk(5);


function lifeInWeeks(age) {    
    var yearRemaining = 90 - age;
    var days = yearRemaining * 365;
    var weeks = yearRemaining * 52;
    var months = yearRemaining * 12;
    
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}


lifeInWeeks(56);