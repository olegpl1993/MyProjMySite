
//меню бургер
const iconMenu = document.querySelector(".menu__icon");
const bodyMenu = document.querySelector(".menu__body");
if(iconMenu) {
    iconMenu.addEventListener("click", ()=>{
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        bodyMenu.classList.toggle("_active");
    });
}

const liMenu = document.querySelectorAll(".menu__list__li");
liMenu.forEach(element => {
element.addEventListener("click", ()=>{
    if(iconMenu.classList.contains("_active")){
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    bodyMenu.classList.toggle("_active");
    }
});
});
const linkLogo = document.querySelector(".logo-link");
linkLogo.addEventListener("click", ()=> {
    if(iconMenu.classList.contains("_active")){
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        bodyMenu.classList.toggle("_active");
        }
});