const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

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
    
},100)