const navList = document.querySelector('#navList');
const closeBtn = document.querySelector('.fa-times');
const menuBtn = document.querySelector('.fa-bars')

menuBtn.addEventListener("click", () => {
    navList.style.right = "0"
})

closeBtn.addEventListener("click", () => {
    navList.style.right = "-230px"
})