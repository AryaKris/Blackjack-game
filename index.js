// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11 - - Creating Javascript Random Numbers with Math.random()


// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "sum:" + sum
    //render out first card and second card
    cardEl.textContent = "cards:" + cards[0] + " " + cards[1]
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

function newCard(){
    console.log("Drawing a new card from the deck")

    let card = 7
    sum += card
    renderGame()
}

