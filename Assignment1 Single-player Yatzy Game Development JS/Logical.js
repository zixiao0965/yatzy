let diceNumberList = [];
let randomNumber;
let rollNumber = 0;

// Upper Section Mark
let OnesMark;
let TowsMark;
let ThreesMark;
let FoursMark;
let FivesMark;
let SixesMark;
let upperSection;
let upperBonus = 0;

// Lower Section Mark
let TOAKMARK;
let FOAKMARK;
let FULLMARK
let alreadySelected = false;
// Array to track locked state of each die
let diceLocked = [false, false, false, false, false];

$(".dice").click(function() {
    let index = $(this).attr("id").replace("Dice", "").replace("P", "") - 1;
    diceLocked[index] = !diceLocked[index]; // Toggle lock state
    $(this).toggleClass("locked", diceLocked[index]); // Add visual indicator for lock
});


$("#RollButton").click(() => {
    for (let i = 0; i < 5; i++) {
        if (!diceLocked[i]) { // Only roll dice that are not locked
            randomNumber = Math.ceil(Math.random() * 6);
            diceNumberList[i] = randomNumber;
        }
    }
    rollNumber++;
    console.log("Dice List : " + diceNumberList);
    $("#Dice1P").attr("src", "Img/" + changePicture(diceNumberList[0]));
    $("#Dice2P").attr("src", "Img/" + changePicture(diceNumberList[1]));
    $("#Dice3P").attr("src", "Img/" + changePicture(diceNumberList[2]));
    $("#Dice4P").attr("src", "Img/" + changePicture(diceNumberList[3]));
    $("#Dice5P").attr("src", "Img/" + changePicture(diceNumberList[4]));
    // if(rollNumber >= 3){
    //     rollNumber = 0;
    // }
    alreadySelected = false;
});

$("#OnesMark").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(OnesMark != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    OnesMark = sum(1);
    $("#OnesMark").append(OnesMark);
    alreadySelected = true;
    everyupperSection();
});

$("#TowsMark").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(TowsMark != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    TowsMark = sum(2);
    $("#TowsMark").append(TowsMark);
    alreadySelected = true;
    everyupperSection();
});

$("#ThreesMark").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(ThreesMark != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    ThreesMark = sum(3);
    $("#ThreesMark").append(ThreesMark);
    alreadySelected = true;
    everyupperSection();
});

$("#FoursMark").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(FoursMark != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    FoursMark = sum(4);
    $("#FoursMark").append(FoursMark);
    alreadySelected = true;
    everyupperSection();
});

$("#FivesMark").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(FivesMark != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    FivesMark = sum(5);
    $("#FivesMark").append(FivesMark);
    alreadySelected = true;
    everyupperSection();
});

$("#SixesMark").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(SixesMark != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    SixesMark = sum(6);
    $("#SixesMark").append(SixesMark);
    alreadySelected = true;
    everyupperSection();
});


$("#TOAKMARK").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(TOAKMARK != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    let sameDiceReturn = sameDices(diceNumberList);
    let valueList = [];
    Object.getOwnPropertyNames(sameDiceReturn).forEach(function(key){
        valueList.push(sameDiceReturn[key]);
    });
    if(!(valueList.includes(3))){
        alert("There are not 3 indentical dice!!！");
        return;
    }
    TOAKMARK = OAKSum();
    $("#TOAKMARK").append(TOAKMARK);
    alreadySelected = true;
});

$("#FOAKMARK").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(FOAKMARK != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    let sameDiceReturn = sameDices(diceNumberList);
    let valueList = [];
    Object.getOwnPropertyNames(sameDiceReturn).forEach(function(key){
        valueList.push(sameDiceReturn[key]);
    });
    if(!(valueList.includes(4))){
        alert("There are not 4 indentical dice!!！");
        return;
    }
    FOAKMARK = OAKSum();
    $("#FOAKMARK").append(FOAKMARK);
    alreadySelected = true;
});

$("#FULLMARK").click(() => {
    if(rollNumber === 0){
        alert("You even not roll the Dices!!!");
        return;
    }
    if(FULLMARK != null){
        alert("You have already selected this option!!!");
        return;
    }
    if(alreadySelected === true){
        alert("Already made a choice this round!!!");
        return;
    }
    let sameDiceReturn = sameDices(diceNumberList);
    let valueList = [];
    Object.getOwnPropertyNames(sameDiceReturn).forEach(function(key){
        valueList.push(sameDiceReturn[key]);
    });
   // Check if all dice are the same
   let allSame = diceNumberList.every(die => die === diceNumberList[0]);
   if (!allSame) {
       alert("Not all dice are the same!");
       return;
   }
    FULLMARK = OAKSum();
    $("#FULLMARK").append(FULLMARK);
    alreadySelected = true;

    // Add bonus points to the bonus section
    upperBonus += 30;
    $("#upperBonus").append(upperBonus); // Update bonus on UI
});


// Tool Functions
let changePicture = (number) => {
    if(number === 1){
        return "D1.jpg";
    } else if(number === 2){
        return "D2.jpg";
    } else if(number === 3){
        return "D3.jpg";
    } else if(number === 4){
        return "D4.jpg";
    } else if(number === 5){
        return "D5.jpg";
    } else {
        return "D6.jpg";
    }
}


let sum = (markSum) => {
    let num = 0;
    for(let i = 0; i < diceNumberList.length; i++){
        if(diceNumberList[i] === markSum){
            num+=markSum;
        }
    }
    return num;
}

let OAKSum = () => {
    let num = 0;
    for(let i = 0; i < diceNumberList.length; i++){
        num += diceNumberList[i];
    }
    return num;
}


let everyupperSection = () => {
    if(OnesMark != null &&
        TowsMark != null &&
        ThreesMark != null &&
        FoursMark != null &&
        FivesMark != null &&
        SixesMark != null
    ){
        upperSection = OnesMark + TowsMark + ThreesMark + FoursMark + FivesMark + SixesMark;
        $("#upperSection").append(upperSection);
        if(upperSection >= 63){
            upperBonus = 35;
        } 
        $("#upperBonus").append(upperBonus);
    }
}


let sameDices = (diceNumberList) => {
    let sameDice = {};
    diceNumberList.forEach(element => {
        if (sameDice[element]) {
            sameDice[element]++;
        } else {
            sameDice[element] = 1;
        }
    });
    return sameDice;
}

let calculateFinalScore = () => {
    everyupperSection(); 
    // Initialize final score with upper section score
    let finalScore = upperSection || 0;

    // Adding lower section scores
    finalScore += TOAKMARK || 0; // 3 of a Kind score
    finalScore += FOAKMARK || 0; // 4 of a Kind score
    finalScore += FULLMARK || 0; // Full House score
    finalScore += upperBonus || 0; // Bonus score

    return finalScore;
};


$("#TerminateButton").click(() => {
    if (rollNumber === 0) {
        alert("You haven't started the game yet!");
        return;
    }

    let finalScore = calculateFinalScore();

    alert("Game Over! Your Final Score is: " + finalScore);

    // Disable all actions and locking dice
    $("#RollButton").prop("disabled", true);
    $("#TerminateButton").prop("disabled", true);
    $(".dice").off("click");
    alert("Thank you for playing!");
});
