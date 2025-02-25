alert("AVISO!! O site ainda está em desenvolvieno, portanto, algumas funções que funcionam em computadores podem não funcionar devidamente em celulares.");

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const main = document.querySelector('.main');
const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menuOpen');
const title = document.querySelector('.title');
const description = document.querySelector('.description1');
const descriptionn = document.querySelector('.description2');
const esqueceuSenha = document.querySelector('.esqueceuSenha');

let menuPressed = false;
let theme = "dark";

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


sun.addEventListener('click', ()=>{toggleTheme()});
moon.addEventListener('click', ()=>{toggleTheme()});


setInterval(()=>{
    if(theme == "light"){
        title.style.color = '#000'
        description.style.color = "#000";
        descriptionn.style.color = "#000";
        esqueceuSenha.style.color = "#000";
        main.style.backgroundColor = "#f2f2f2";
    } else {
        title.style.color = '#fff'
        description.style.color = "#fff";
        descriptionn.style.color = "#fff";
        esqueceuSenha.style.color = "#fff";
        main.style.backgroundColor = "#222";
    }
},50)

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