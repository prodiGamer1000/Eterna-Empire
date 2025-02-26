//alert("AVISO!! O site ainda está em desenvolvieno, portanto, algumas funções que funcionam em computadores podem não funcionar devidamente em celulares.");

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const main = document.querySelector('.main');
const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menuOpen');
const title = document.querySelector('.title');
const description = document.querySelector('.description1');
const descriptionn = document.querySelector('.description2');
const politicagem = document.querySelector('.politicagem');

let menuPressed = false;
let theme = "dark";

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
            title.style.color = '#000'
            description.style.color = "#000";
            descriptionn.style.color = "#000";
            politicagem.style.color = "#000";
            main.style.backgroundColor = "#f2f2f2";
        } else {
            title.style.color = '#fff'
            description.style.color = "#fff";
            descriptionn.style.color = "#fff";
            politicagem.style.color = "#fff";
            main.style.backgroundColor = "#333";
        }
    }else if(dispositivo == "Pc"){
        if(theme == "light"){
            title.style.color = '#000'
            description.style.color = "#000";
            descriptionn.style.color = "#000";
            politicagem.style.color = "#000";
            main.style.backgroundColor = "#f2f2f2";
        } else {
            title.style.color = '#fff'
            description.style.color = "#fff";
            descriptionn.style.color = "#fff";
            politicagem.style.color = "#fff";
            main.style.backgroundColor = "#333";
        }
    }
}



sun.addEventListener('click', ()=>{toggleTheme()});
moon.addEventListener('click', ()=>{toggleTheme()});

menuOpen.addEventListener('click', ()=>{
    if(menuPressed) {
        menu.style.display = 'none';
        menuOpen.style.transform = "rotate(0deg)";
        menuPressed = false;
    } else {
        menu.style.display = 'flex';
        menuOpen.style.transform = "rotate(90deg)";
        menuPressed = true;
    }
});