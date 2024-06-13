const ToggleButton = document.getElementsByClassName('ToggleButton')[0]
const NavbarLinks = document.getElementsByClassName('NavbarLinks')[0]
const ChanelButton = document.getElementById("ChanelButton")
const TomFordButton = document.getElementById("TomFordButton")
const VersaceButton = document.getElementById("VersaceButton")
const GuessButton = document.getElementById("GuessButton")
var ChanelGallery = document.getElementById("ChanelGallery")
var TomFordGallery = document.getElementById("TomFordGallery")
var VersaceGallery = document.getElementById("VersaceGallery")
var GuessGallery = document.getElementById("GuessGallery")

ChanelButton.addEventListener('click', () => {
    TomFordGallery.style.display = "none"
    VersaceGallery.style.display = "none"
    GuessGallery.style.display = "none"
    ChanelGallery.style.display = "block"
})

GuessButton.addEventListener('click', () => {
    TomFordGallery.style.display = "none"
    VersaceGallery.style.display = "none"
    ChanelGallery.style.display = "none"
    GuessGallery.style.display = "block"
})

TomFordButton.addEventListener('click', () => {
    GuessGallery.style.display = "none"
    VersaceGallery.style.display = "none"
    ChanelGallery.style.display = "none"
    TomFordGallery.style.display = "block"
})

VersaceButton.addEventListener('click', () => {
    GuessGallery.style.display = "none"
    ChanelGallery.style.display = "none"
    TomFordGallery.style.display = "none"
    VersaceGallery.style.display = "block"
})

ToggleButton.addEventListener('click', () => {
    NavbarLinks.classList.toggle('active')
})

