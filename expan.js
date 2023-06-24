const mainMenu = document.querySelectorAll(".mainMenu")
const subMenu = document.querySelectorAll(".subMenu")

for (let i= 0; i< mainMenu.length; i++) {
    mainMenu[i].addEventListener("click", () =>{
        subMenu[i].classList.remove("hidden")
    })

    subMenu[i].addEventListener("click", () => {
        subMenu[i].classList.add("hidden")
    })
    
}