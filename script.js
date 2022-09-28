// collect user choice

// promt user for user choice to a variable
// edge case: adjust for casing
// edge case: handle non-standard letters
// edge case: handle empty submission
// handle empty submissions


// display status
// ask to play agian
var wins = 0
var losses = 0
var draws = 0

function startGames() {
        var choice = prompt("ROCK, PAPER, SCISSORS").toUpperCase()

        var computerOptions = ["ROCK", "PAPER", "SCISSORS"]

        var computerChoice = (computerOptions[Math.floor(Math.random() * computerOptions.length)]

}

if (choice == computerChoice) {
        draws++
        alert("Draw")
        
}   else if (((choice == "ROCK") && (computerChoice == "PAPER")) || ((choice == "SCISSORS") && (computerChoice == "ROCK")) || ((choice == "PAPER") && (computerChoice == "SCISSORS"))) {
        losses++
        alert("Lose")
}   else {
        win++
        alert("win")
}
alert('Stats:
        Wins: ${wins}
        Draws: ${draws}
        Losses: ${losses}')

        var play - confirm("Play again??")
        if (play) {
                startGames()

        }

        startGame();
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