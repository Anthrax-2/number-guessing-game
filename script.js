"use strict"

const selectField = document.querySelector("#difficulty")
const inputField = document.querySelector("#number")
const outputField = document.querySelector("#output")

const enterBtn = document.querySelector("#enter")
const restartBtn = document.querySelector("#restart")

const roundsPerDifficulty = { 1: "10", 2: "5", 3: "3" }

let randomNumber = Math.floor(Math.random() * 100) + 1

let pickedDifficulty = null
let numberOfRounds = 10

selectField.addEventListener("change", (event) => {
    event.preventDefault()
    pickedDifficulty = selectField.value
    numberOfRounds = Number(roundsPerDifficulty[pickedDifficulty])
})

function validateGuess(guess) {
    if (1 <= guess && 100 >= guess) {
        return true
    }
    return false
}

function checkGuess(guess, answer) {
    if (guess === answer) {
        return true
    }
    return false
}

function showResult(guess, answer) {
    if (checkGuess(guess, answer)) {
        outputField.style.color = "green"
        outputField.textContent = "Correct!"
        toggleRestart()
    } else {
        if (guess > answer) {
            outputField.style.color = "red"
            outputField.textContent = "Lower"
        } else {
            outputField.style.color = "red"
            outputField.textContent = "Higher"
        }
    }
}

let currentRound = 0
let currentGuess = null

enterBtn.addEventListener("click", () => {
    if (!validateGuess(inputField.value)) {
        outputField.style.color = "yellow"
        outputField.textContent = "Guess must between 1 and 100"
    } else {
        selectField.disabled = true
        currentGuess = Number(inputField.value)
        currentRound++
        showResult(currentGuess, randomNumber)
    }

    if (currentRound === numberOfRounds && !checkGuess(currentGuess, randomNumber)) {
        outputField.textContent = `You ran out of guesses, the answer was ${randomNumber}`
        enterBtn.disabled = true
        inputField.disabled = true
        toggleRestart()
    }
})

function restart() {
    inputField.value = ""
    selectField.value = "1"
    selectField.disabled = false
    enterBtn.disabled = false
    inputField.disabled = false
    currentRound = 0
    currentGuess = null
    pickedDifficulty = null
    numberOfRounds = 10
    randomNumber = Math.floor(Math.random() * 100) + 1
    outputField.textContent = ""
    toggleRestart()
}

restartBtn.addEventListener("click", () => {
    restart()
})

function toggleRestart() {
    restartBtn.classList.toggle("hide")
}
