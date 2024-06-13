const ToggleButton = document.getElementsByClassName('ToggleButton')[0]
const NavbarLinks = document.getElementsByClassName('NavbarLinks')[0]

ToggleButton.addEventListener('click', () => {
    NavbarLinks.classList.toggle('active')
})