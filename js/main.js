const menuBtn = document.querySelector(".header__button")
const crossBtn = document.querySelector(".header__crossButton")
const menuMobile = document.querySelector(".header__menu")


menuBtn.addEventListener("click", ()=> {
    menuMobile.classList.toggle("header__menu-open")
})

crossBtn.addEventListener("click", ()=> {
    menuMobile.classList.toggle("header__menu-open")
})