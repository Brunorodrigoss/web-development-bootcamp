function getMilk(money, costPerBottle) { 
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("tou can buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    return calcChange(money, costPerBottle);
  }


function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startinAmount, costPerBottle) {
    var change = startinAmount % costPerBottle;
    return change;
}


console.log("Hello master, here is your " + getMilk(10, 3) + " change.");