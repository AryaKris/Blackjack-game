// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11 - - Creating Javascript Random Numbers with Math.random()


// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

let hasblackJack = false
let message = ""
message = "Do you want to draw a new card ?🙂 "
if (sum<=21) {
    console.log("Do you want to draw a new card?🙂)" 
} else if (sum===21){
    console.log("Wohoo!You've got a Blackjack!🥳")
    hasblackJack = true
} else {
    console.log("You're out of the game!😭")
}

