"use strict"

const selectField = document.querySelector("#difficulty")
const inputField = document.querySelector("#number")
const outputField = document.querySelector("#output")

const enterBtn = document.querySelector("#enter")
const restartBtn = document.querySelector("#restart")

const roundsPerDifficulty = { 1: "10", 2: "5", 3: "2" }

let randomNumber = Math.floor(Math.random() * (1 + 100))

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
    } else if (!checkGuess(guess, answer)) {
        if (guess > answer) {
            outputField.style.color = "red"
            outputField.textContent = "Lower"
        } else {
            outputField.style.color = "red"
            outputField.textContent = "Higher"
        }
    }
}