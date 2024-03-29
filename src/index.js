import './style.css';

import { createMenu } from './menu';
import { createContactCard } from './contact';

const mainBody = document.querySelector('body');
const mainContainer = document.createElement('div');

export function createHeader() {
    mainContainer.classList.add('mainContainer');
    mainBody.appendChild(mainContainer);


    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header');
    mainContainer.appendChild(headerContainer);

    let h1 = document.createElement('h1');
    h1.textContent = "- Welcome to The Homebrew Cafe -";
    headerContainer.appendChild(h1);

    let h3 = document.createElement('h3');
    h3.textContent = "All of your delicious home brew needs. Available in-house, or on the go!";
    headerContainer.appendChild(h3);

    const headerNav = document.createElement('nav');
    headerContainer.appendChild(headerNav);

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
};

createHeader();

// create content pieces below
// generate the home page fluff by default, and also if the 'Home' btn is pressed. So make it appear first via a function, and then add a listener to run the same function if the btn is pressed (watch for duplicate creation on btn press). Header is static now (maybe footer too, or might just generate footer each time), the rest below it gets generated

function createContent(){

    // Create content DIV (access with content variable)
    let content = document.createElement('div');
    content.classList.add('content');
    mainContainer.appendChild(content);
    
    // Create into para
    let intro = document.createElement('div');
    intro.classList.add('intro');
    
    let para1 = document.createElement('p');
    para1.textContent = "Come down to The Homebrew Cafe, where the aroma of freshly brewed coffee and the sound of laughter fill the air.";
    
    let para2 = document.createElement('p');
    para2.textContent = "Once inside you'll experience our warm, inviting atmosphere that will make you feel right at home. Our cozy cafe is the perfect place to relax, catch up with friends, or simply unwind with a delicious cup of coffee.";

    content.appendChild(intro);
    intro.appendChild(para1);
    intro.appendChild(para2);


    // Create hours table
    let hours = document.createElement('div');
    hours.classList.add('hours');
    let table = document.createElement('table');
    let caption = document.createElement('caption');
    caption.textContent = "Hours";

    content.appendChild(hours);
    hours.appendChild(table);
    table.appendChild(caption);


    // store hours in array of objects
    const storeHours = [
        { day: 'Sunday', time: 'Closed' },
        { day: 'Monday', time: '6am - 4pm' },
        { day: 'Tuesday', time: '6am - 4pm' },
        { day: 'Wednesday', time: '6am - 4pm' },
        { day: 'Thursday', time: '6am - 4pm' },
        { day: 'Friday', time: '6am - 4pm' },
        { day: 'Saturday', time: '8am - 4pm' }
    ];

    storeHours.forEach((data) => {
        let tableRow = document.createElement('tr');
        let tableHeader = document.createElement('th');
        tableHeader.textContent = data.day;
        let tableTime = document.createElement('td');
        tableTime.textContent = data.time;

        tableRow.appendChild(tableHeader);
        tableRow.appendChild(tableTime);
        table.appendChild(tableRow)
    })

    // create location information box
    let location = document.createElement('div');
    location.classList.add('location');
    content.appendChild(location);

    let header4 = document.createElement('h4');
    header4.textContent = "Location";
    let para3 = document.createElement('p');
    para3.textContent = "#8 - 1812 Belmont Drive, Pleasantville, CO";

    location.appendChild(header4);
    location.appendChild(para3);
};

createContent();


function createFooter(){
    let footer = document.createElement('div');
    footer.classList.add('footer');
    mainContainer.appendChild(footer);

    let footerPara = document.createElement('p');
    let text1 = document.createTextNode("Photos by ");
    let text2 = document.createTextNode(" on ");

    let footerA1 = document.createElement('a');
    footerA1.href = "https://unsplash.com/@shawnanggg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
    footerA1.textContent = "shawnanggg";
    
    let footerA2 = document.createElement('a');
    footerA2.href = "https://unsplash.com/photos/brown-and-gray-concrete-store-nmpW_WwwVSc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
    footerA2.textContent = "Unsplash";
    
    footer.appendChild(footerPara);
    footerPara.appendChild(text1);
    footerPara.appendChild(footerA1);
    footerPara.appendChild(text2);
    footerPara.appendChild(footerA2);
};

createFooter();

const headerBtns = document.querySelectorAll('button');
headerBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let footer = document.querySelector('.footer');
        let allDivs = document.querySelectorAll('div');
        allDivs.forEach((div) => {
            if (e.target.classList.contains('home')){
                if (div.classList.contains('content')){
                    return;
                } else if (div.classList.contains('menuContainer')){
                    footer.remove();
                    div.remove();
                    createContent();
                    createFooter();
                } else if (div.classList.contains('contactInfo')){
                    footer.remove();
                    div.remove();
                    createContent();
                    createFooter();
                }
            } else if (e.target.classList.contains('menu')){
                if (div.classList.contains('menuContainer')){
                    return;
                } else if (div.classList.contains('content')){
                    footer.remove();
                    div.remove();
                    createMenu();
                    createFooter();
                } else if (div.classList.contains('contactInfo')){
                    footer.remove();
                    div.remove();
                    createMenu();
                    createFooter();
                }
            } else if (e.target.textContent === "Contact"){
                if (div.classList.contains('contactInfo')){
                    return;
                } else if (div.classList.contains('menuContainer')){
                    footer.remove();
                    div.remove();
                    createContactCard();
                    createFooter();
                } else if (div.classList.contains('content')){
                    footer.remove();
                    div.remove();
                    createContactCard();
                    createFooter();
                }
            }
        });
    });
});