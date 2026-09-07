"use strict"


const selectField = document.querySelector("#difficulty")
const inputField = document.querySelector("#number")
const outputField = document.querySelector("#output")

const roundsPerDifficulty = {"1": "10", "2": "5", "3": "2"}

const randomNumber = Math.floor(Math.random() * (1 + 100))

let pickedDifficulty = null
let numberOfRounds = null 

selectField.addEventListener("change", (event) => {
    event.preventDefault()
    pickedDifficulty = selectField.value
    numberOfRounds = Number(roundsPerDifficulty[pickedDifficulty])
})





