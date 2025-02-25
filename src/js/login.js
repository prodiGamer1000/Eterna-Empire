//alert("AVISO!! O site ainda está em desenvolvieno, portanto, algumas funções que funcionam em computadores podem não funcionar devidamente em celulares.");

const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menuOpen');

let menuPressed = false;

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