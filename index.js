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

     // Create a for loop that renders out all the cards instead of just two

     for (let i =0; i<cards.length; i++){
         cardsEl.textContent += cards[i] + " "
     }
    //render out first card and second card
    cardEl.textContent = "cards:" 
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }

    
    }
    // 2. Display the message in the messageEl using messageEl.textContent
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
messageEl.textContent = message




function newCard(){
    console.log("Drawing a new card from the deck")

    let card = 7
    sum += card

    //push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}

