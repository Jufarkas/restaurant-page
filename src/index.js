import './style.css';

const mainBody = document.querySelector('body');

// element creators
const newDiv = document.createElement('div');
const nav = document.createElement('nav');
const btn = document.createElement('button');
const para = document.createElement('p');
const aElem = document.createElement('a');
const header1 = document.createElement('h1');
const header3 = document.createElement('h3');

export function createHeader() {
    const headerContainer = newDiv;
    headerContainer.classList.add('header');
    mainBody.appendChild(headerContainer);

    let h1 = header1;
    h1.textContent = "- Welcome to The Homebrew Cafe -";
    headerContainer.appendChild(h1);

    let h3 = header3;
    h3.textContent = "All of your delicious home brew needs. Available in-house, or on the go!";
    headerContainer.appendChild(h3);

    const headerNav = nav;
    headerContainer.appendChild(nav);

    const homeBtn = document.createElement('button');
    headerNav.appendChild(homeBtn);
    homeBtn.classList.add('home');
    homeBtn.textContent = "Home";
    
    const menuBtn = document.createElement('button');
    headerNav.appendChild(menuBtn);
    menuBtn.classList.add('menu');
    menuBtn.textContent = "Menu";
    
    

    const contactBtn = document.createElement('button');
    headerNav.appendChild(contactBtn);
    contactBtn.classList.add('contact');
    contactBtn.textContent = "Contact";
    

}

createHeader();