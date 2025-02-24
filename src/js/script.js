alert("AVISO!! O site ainda está em desenvolvieno, portanto, algumas funções que funcionam em computadores podem não funcionar devidamente em celulares.");

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const main = document.querySelector('.main');
const description = document.querySelector('.description');
const title = document.querySelector('.descriptionTitle');
const menuMobile = document.querySelector('.menuMobile');
const menuMobileOpen = document.querySelector('.menuMobileOpen');

let theme = "dark";
let menuMobilePressed = false;

function toggleTheme() {
    if(theme == "light") {
        theme = "dark"
        moon.style.display = "none";
        sun.style.display = "block";
    } else {
        theme = "light"
        moon.style.display = "block";
        sun.style.display = "none";
    }
} 

sun.addEventListener('click', ()=>{toggleTheme();});
moon.addEventListener('click', ()=>{toggleTheme()});

setInterval(()=>{
    if(theme == "light"){
        title.style.color = '#000'
        description.style.backgroundColor = "#ddd";
        description.style.color = "#000";
        main.style.backgroundColor = "#f2f2f2";
    } else {
        title.style.color = '#fff'
        description.style.backgroundColor = "#444";
        description.style.color = "#fff";
        main.style.backgroundColor = "#222";
    }
},50)

menuMobile.addEventListener('click', ()=>{
    if(menuMobilePressed) {
        menuMobileOpen.style.display = 'none';
        menuMobile.style.transform = "rotate(0deg)";
        menuMobilePressed = false;
    } else {
        menuMobileOpen.style.display = 'flex';
        menuMobile.style.transform = "rotate(90deg)";
        menuMobilePressed = true;
    }
});