//Navigation Menu Collapse
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

//WhatsApp Button
const waButton = document.getElementsByClassName('whatsApp_Button-icon')[0]
const waUpper = document.getElementsByClassName('whatsApp_Button-upper')[0]
const waCallToAction = document.getElementsByClassName('whatsApp_Button-callToAction')[0]
const waIcon = document.getElementsByClassName('wa_icon')[0]
const xIcon = document.getElementsByClassName('x_icon')[0]

//functions
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

waButton.addEventListener('click', () => {
    waUpper.classList.toggle('active')
    waCallToAction.classList.toggle('active')
    waIcon.classList.toggle('active')
    xIcon.classList.toggle('active')
})