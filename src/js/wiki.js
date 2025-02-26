//alert("AVISO!! O site ainda está em desenvolvieno, portanto, algumas funções que funcionam em computadores podem não funcionar devidamente em celulares.");

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const main = document.querySelector('.main');
const menuMobile = document.querySelector('.menuMobile');
const menuMobileOpen = document.querySelector('.menuMobileOpen');
const sunMobile = document.querySelector('.sunMobile');
const moonMobile = document.querySelector('.moonMobile');
const title = document.querySelector('.wikiTitle');
const desc = document.querySelector('.wikiDesc');


let theme = "dark";
let themeMobile = "dark";
let menuMobilePressed = false;

function toggleTheme() {
    if(theme == "light") {
        theme = "dark"
        moon.style.display = "none";
        sun.style.display = "block";
        themeAlternate("Pc")
    } else {
        theme = "light"
        moon.style.display = "block";
        sun.style.display = "none";
        themeAlternate("Pc")
    }
} 
function toggleThemeMobile(){
    if(themeMobile == "light") {
        themeMobile = "dark"
        moonMobile.style.display = "none";
        sunMobile.style.display = "block";
        themeAlternate("mobile")
    } else {
        themeMobile = "light"
        moonMobile.style.display = "block";
        sunMobile.style.display = "none";
        themeAlternate("mobile")
    }
}
function themeAlternate(dispositivo){
    if(dispositivo == "mobile"){
        if(themeMobile == "light"){
            title.style.color = "#000"
            desc.style.backgroundColor = "#ddd";
            desc.style.color = "#000";
            main.style.backgroundColor = "#f2f2f2";
        } else {
            title.style.color = "#fff"
            desc.style.backgroundColor = "#444";
            desc.style.color = "#fff";
            main.style.backgroundColor = "#222";
        }
    }else if(dispositivo == "Pc"){
        if(theme == "light"){
            title.style.color = "#000"
            desc.style.backgroundColor = "#ddd";
            desc.style.color = "#000";
            main.style.backgroundColor = "#f2f2f2";
        } else {
            title.style.color = "#fff"
            desc.style.backgroundColor = "#444";
            desc.style.color = "#fff";
            main.style.backgroundColor = "#222";
        }
    }
}


sun.addEventListener('click', ()=>{toggleTheme()});
moon.addEventListener('click', ()=>{toggleTheme()});

sunMobile.addEventListener('click', ()=>{toggleThemeMobile()});
moonMobile.addEventListener('click', ()=>{toggleThemeMobile()});

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

