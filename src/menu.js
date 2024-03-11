import './style.css';

export function createMenu() {
    //delete .content div (Home page info) && add new div w/ 'menuContainer' class
    //
    // WILL NEED TO ADD AN IF STATEMENT TO THE BELOW TO CHECK:
    // IF (.content *exists*) => remove and proceed
    // IF (.contact *exists*) => remove and proceed
    //
    const mainContainer = document.querySelector('.mainContainer');
    const footer = document.querySelector('.footer');
    let content = document.querySelector('.content');
    content.remove();
    
    let menu = document.createElement('div');
    menu.classList.add('menuContainer');
    mainContainer.insertBefore(menu, footer)

    //After deleting .content or .contact, add card columns

    let column1 = document.createElement('div');
    column1.classList.add('cardColumn');
    let column2 = document.createElement('div');
    column2.classList.add('cardColumn');
    let column3 = document.createElement('div');
    column3.classList.add('cardColumn');
    menu.appendChild(column1);
    menu.appendChild(column2);
    menu.appendChild(column3);

    //column1 cards
    let item1 = document.createElement('div');
    item1.classList.add('item1');
    let item2 = document.createElement('div');
    item2.classList.add('item2');

    column1.appendChild(item1);
    column1.appendChild(item2);

    let beverages = document.createElement('h3');
    beverages.classList.add('beverages');
    beverages.textContent = "Beverages";
    
    let bevCard1 = document.createElement('div');
    bevCard1.classList.add('card');
    item1.appendChild(beverages);
    item1.appendChild(bevCard1);
    
    let drinksPicture1 = document.createElement('div');
    drinksPicture1.classList.add('drinks');
    bevCard1.appendChild(drinksPicture1);
    
    let drinksList = document.createElement('ul');
    bevCard1.appendChild(drinksList);
    
    let list1 = [
        {item: 'Espresso Shot - $1.00'},
        {item: 'Regular, Black - $2.49'},
        {item: 'Decaf, Black - $2.49'},
        {item: 'Local Blends - $3.49'},
        {item: 'Cappuccino - $5.49'},
        {item: 'Instant Coffee - $12.49'},
    ];

    list1.forEach((item) => {
        let listItem = document.createElement('li');
        listItem.textContent = item.item;
        drinksList.appendChild(listItem);
    })


    //column2 cards
    let item3 = document.createElement('div');
    item3.classList.add('item3');
    let item4 = document.createElement('div');
    item4.classList.add('item4');

    column2.appendChild(item3);
    column2.appendChild(item4);


    
    //column3 cards
    let item5 = document.createElement('div');
    item5.classList.add('item5');
    let item6 = document.createElement('div');
    item6.classList.add('item6');

    column3.appendChild(item5);
    column3.appendChild(item6);

}