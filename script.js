// collect user choice

// promt user for user choice to a variable
// edge case: adjust for casing
// edge case: handle non-standard letters
// edge case: handle empty submission
// handle empty submissions


// display status
// ask to play agian

var choice = prompt("ROCK, PAPER, SCISSORS")

console.log(choice)

var computerOptions = ["ROCK", "PAPER", "SCISSORS"]


var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]

console.log(computerChoice)


if (choice == computerChoice) {
        console.log("Draw")

// }     else if ((choice !== "ROCK", "PAPER", "SCISSORS")) {
//             console.log("Please select appropriate choice.")
//             Program.restart()
             
}   else if (((choice == "ROCK") && (computerChoice == "PAPER")) || ((choice == "SCISSORS") && (computerChoice == "ROCK")) || ((choice == "PAPER") && (computerChoice == "SCISSORS"))) {
        console.log("Lose")
}   else 
console.log("win")

//Play again?
// var again = confirm("Would you like to play again?")

//restart button
//  const restartButton = documnet.getElementByID("restart")
//  restartButton.addEventListner("click", () => {
// var choice = prompt("Rock, Paper, Scissors, SHOOT")

// console.log(choice)

//  computerOptions = ["rock", "paper", "scissors"]

//  computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]

//  })
 

// function recursion()
// if (again == true)



// } else if(computerChoice === "") {
//     computerChoice = "scissors"
// }



// if (choice === computerChoice) {
//     console.log("Draw")
// }
//     else if (choice 

// }