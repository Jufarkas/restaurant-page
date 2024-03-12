import './style.css';

export function createContactCard(){
    const mainContainer = document.querySelector('.mainContainer');
    const footer = document.querySelector('.footer');
    
    let contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');
    mainContainer.insertBefore(contactInfo, footer)

    // Add contact card
    let contactCard = document.createElement('div');
    contactCard.classList.add('contact', 'card');
    contactInfo.appendChild(contactCard);

    // h3 header
    let contactH3 = document.createElement('h3');
    contactH3.textContent = "Contact Info";
    contactCard.appendChild(contactH3);

    // phone
    let phoneHeader = document.createElement('h6');
    phoneHeader.textContent = "Phone:";
    contactCard.appendChild(phoneHeader);
    let phonePara = document.createElement('p');
    phonePara.textContent = "(555) 123-4567";
    contactCard.appendChild(phonePara);

    // email
    let emailHeader = document.createElement('h6');
    emailHeader.textContent = "Email:";
    contactCard.appendChild(emailHeader);
    let emailPara = document.createElement('p');
    emailPara.textContent = "definitelyRealContact@homebrewcafe.com";
    contactCard.appendChild(emailPara); 

    // address
    let addressHeader = document.createElement('h6');
    addressHeader.textContent = "Address:";
    contactCard.appendChild(addressHeader);
    let addressPara = document.createElement('p');
    addressPara.innerText = "#8 - 1812\nBelmont Drive,\nPleasantville, CO";
    contactCard.appendChild(addressPara); 
}