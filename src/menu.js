import './style.css';

export function createMenu() {
    //add new div w/ 'menuContainer' class
    //
    //
    const mainContainer = document.querySelector('.mainContainer');
    const footer = document.querySelector('.footer');
    
    let menu = document.createElement('div');
    menu.classList.add('menuContainer');
    mainContainer.insertBefore(menu, footer)

    //add card columns

    let column1 = document.createElement('div');
    column1.classList.add('cardColumn');
    let column2 = document.createElement('div');
    column2.classList.add('cardColumn');
    let column3 = document.createElement('div');
    column3.classList.add('cardColumn');
    menu.appendChild(column1);
    menu.appendChild(column2);
    menu.appendChild(column3);

    //column1
    //CARD 1
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

    //column1
    //CARD 2
    let beveragesCont = document.createElement('h6');
    beveragesCont.textContent = "Beverages cont.";
    
    let bevCard2 = document.createElement('div');
    bevCard2.classList.add('card');
    item2.appendChild(beveragesCont);
    item2.appendChild(bevCard2);
      
    let drinksList2 = document.createElement('ul');
    bevCard2.appendChild(drinksList2);

    let list2 = [
        {item: 'Various Teas - $1.49'},
        {item: 'London Fog - $2.00'},
        {item: 'Mocha - $3.49'},
        {item: 'Matcha Latte - $5.49'},
        {item: 'Con panna - $5.49'},
        {item: 'And more in-house!'},
    ];

    list2.forEach((item) => {
        let listItem2 = document.createElement('li');
        listItem2.textContent = item.item;
        drinksList2.appendChild(listItem2);
    })
    

    let drinksPicture2 = document.createElement('div');
    drinksPicture2.classList.add('drinks');
    bevCard2.appendChild(drinksPicture2);


    //column2
    //CARD 3
    let item3 = document.createElement('div');
    item3.classList.add('item3');
    let item4 = document.createElement('div');
    item4.classList.add('item4');

    column2.appendChild(item3);
    column2.appendChild(item4);

    let specialtiesH3 = document.createElement('h3');
    specialtiesH3.textContent = "Specialties";
    item3.appendChild(specialtiesH3);
    
    let specialCard = document.createElement('div');
    specialCard.classList.add('card', 'special');
    item3.appendChild(specialCard);
    
    let specialtyImg = document.createElement('div');
    specialtyImg.classList.add('specialty');
    specialCard.appendChild(specialtyImg);
    
    let specialCardH3 = document.createElement('h3');
    specialCardH3.textContent = "Signature English Breakfast";
    specialCard.appendChild(specialCardH3);
    
    let specialPara1 = document.createElement('p');
    specialPara1.textContent = "Savor the delicious combo of crispy bacon, savory sausage, perfectly cooked eggs, baked beans, and your choice of toast. Add a side of grilled tomatoes or mushrooms for the ultimate experience. - $14.49";
    specialCard.appendChild(specialPara1);

    //column2
    //CARD 4
    let specialtiesH6 = document.createElement('h6');
    specialtiesH6.textContent = "Specialties cont.";
    item4.appendChild(specialtiesH6);

    let specialtiesCard2 = document.createElement('div');
    specialtiesCard2.classList.add('card', 'special', 'second');
    item4.appendChild(specialtiesCard2);

    let specialtyImg2 = document.createElement('div');
    specialtyImg2.classList.add('specialty2');
    specialtiesCard2.appendChild(specialtyImg2);

    let specialContPara = [
        {item: "Ham & Cheese Croissant; choice of 2 sides - $13.49"},
        {item: "Bacon n' Egg Bowl w/ hasbrowns and toast - $12.49"},
        {item: "Farmer's Breakfast; includes 1 Dessert - $14.49"},
        {item: "Quick to-go options always available in-house!"},
    ]; 

    specialContPara.forEach((item) =>{
        let para = document.createElement('p');
        para.textContent = item.item;
        specialtiesCard2.appendChild(para);
    });


    //column3
    //CARD 5
    let item5 = document.createElement('div');
    item5.classList.add('item5');
    let item6 = document.createElement('div');
    item6.classList.add('item6');

    column3.appendChild(item5);
    column3.appendChild(item6);

    let dessertsH3 = document.createElement('h3');
    dessertsH3.textContent = "Desserts";
    item5.appendChild(dessertsH3);

    let dessertCard1 = document.createElement('div');
    dessertCard1.classList.add('card', 'dessert');
    item5.appendChild(dessertCard1);

    let cakeImg = document.createElement('div');
    cakeImg.classList.add('cake');
    dessertCard1.appendChild(cakeImg);

    let dessertList = document.createElement('ul');
    dessertCard1.appendChild(dessertList);
    
    let desserts = [
        {item: "Black Forest Cube - $4.49"},
        {item: "Cheesecake Slice - $2.49"},
        {item: "Super cookies - $1.49ea"},
    ];

    desserts.forEach((dessert) => {
        let dessertItem = document.createElement('li');
        dessertItem.textContent = dessert.item;
        dessertList.appendChild(dessertItem);
    });

    //CARD 6
    let dessertsCont = document.createElement('h6');
    dessertsCont.textContent = "Desserts cont.";
    item6.appendChild(dessertsCont);

    let dessertCard2 = document.createElement('div');
    dessertCard2.classList.add('card', 'dessert2');
    item6.appendChild(dessertCard2);

    let sconesImg = document.createElement('div');
    sconesImg.classList.add('scones');
    dessertCard2.appendChild(sconesImg);

    let dessertList2 = document.createElement('ul');
    dessertCard2.appendChild(dessertList2);
    let dessertList2Item = document.createElement('li');
    dessertList2Item.textContent = "Scones; baked fresh daily - $2.55 - $3.00";
    dessertList2.appendChild(dessertList2Item);
}