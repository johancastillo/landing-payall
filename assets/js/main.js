let btn = document.getElementById("btn-sections")
let message = document.getElementById("message")
let cardMenu = document.getElementById("card-menu")

menuToggle = () => {
    message.classList.toggle("deactive")
    cardMenu.classList.toggle("active")
}

btn.addEventListener('click', menuToggle)

// Boxes section 3
let boxPaso1 = document.getElementById("box-paso1")
let boxPaso2 = document.getElementById("box-paso2")
let boxPaso3 = document.getElementById("box-paso3")
let boxPaso4 = document.getElementById("box-paso4")
let boxPaso5 = document.getElementById("box-paso5")
let boxImportant = document.getElementById("box-important")