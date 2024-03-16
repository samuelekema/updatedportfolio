//navbar change color on scroll
const mynavbar = document.querySelector(".navbar");

window.onscroll = ()=>{
    if(window.scrollY >= 300){
        mynavbar.classList.add("nav-active");
    } else {
        mynavbar.classList.remove("nav-active");
    }
}



//dark-light mode
const theme = document.querySelector(".circle2");
theme.addEventListener("click", ()=>{
    theme.classList.toggle("theme");
    const navbar = document.querySelector(".navbar");
    const menuBar = document.querySelector(".menu-bar");
    const circle1 = document.querySelector(".circle1");
    navbar.classList.toggle("switchColorWhite");
    menuBar.classList.toggle("switchColorBlack");
    circle1.classList.toggle("switchColorBlack");
    
    
})


//function to animate hamburger icon
function menuClicked(){
    const menuBar = document.querySelector(".menu-bar");
    menuBar.addEventListener("click", ()=>{
        const dropMenu = document.getElementById("dropdownMenu");
        const myLink = document.querySelectorAll(".myLink")
        menuBar.classList.toggle("change"); 
        dropMenu.classList.toggle("makeVisible");
        for(i=0; i<myLink.length; i++){
            myLink[i].classList.toggle('showLink');
        }
        
    })

}
menuClicked();


//type effect on text

const div = document.querySelector(".myName");
const text = `Samuel Ekema`;
function textTypingEffect(element, text, i=0) {
    if(i===0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i+1), 50);
}

textTypingEffect(div, text);






