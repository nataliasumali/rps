var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) { 
        if (choice1 === choice2) {
    prompt("The result is a tie, do it again");
    } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
    } else if (choice1 === "paper") {
    if (choice2 === "rock") {
        return "paper wins";
    } else {
        return "scissors win";
    }
    } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
        return "rock wins";
    } else {
        return "scissors wins";
    }
    }
    }

var choice_val = "";
inputs = document.getElementsByName("playerChoice");
for(var input_stuff in inputs){
  if(inputs[input_stuff].checked)
  {
    choice_val = inputs[input_stuff].value;
    break;
  }
}

compare(userChoice, computerChoice)