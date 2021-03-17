let btnAbout = document.querySelector('.button_2');
let btnContact = document.querySelector('.button_1');
let title = document.getElementsByTagName('title')[0].textContent = "Home | JANEX - Hurtonia Drobiu"

let home = document.querySelector('.Janex');

btnAbout.addEventListener('click', about);
btnContact.addEventListener('click', contact);
home.addEventListener('click', goHome);

function about() {
    document.querySelector('.contentContact').classList.remove('off');
    document.getElementsByTagName('title')[0].textContent = 'Kontakt | JANEX - Hurtownia Drobiu';

    document.querySelector('.contentAbout').classList.add('off');
}

function contact() {
    document.querySelector('.contentContact').classList.add('off');
    document.getElementsByTagName('title')[0].textContent = 'O nas | JANEX - Hurtownia Drobiu';

    document.querySelector('.contentAbout').classList.remove('off');
}

function goHome() {
    window.location.href="../index.html";
}

