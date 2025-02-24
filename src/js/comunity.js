const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const main = document.querySelector('.main');
const description = document.querySelector('.comunityDesc');
const title = document.querySelector('.comunityTitle');

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

sun.addEventListener('click', ()=>{toggleTheme();});
moon.addEventListener('click', ()=>{toggleTheme()});

setInterval(()=>{
    if(theme == "light"){
        title.style.color = "#000"
        description.style.backgroundColor = "#ddd";
        description.style.color = "#000";
        main.style.backgroundColor = "#f2f2f2";
    } else {
        title.style.color = "#fff"
        description.style.backgroundColor = "#444";
        description.style.color = "#fff";
        main.style.backgroundColor = "#222";
    }
},50)