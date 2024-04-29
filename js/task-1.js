const categories = document.querySelector("#categories");
// console.log(categories)       //головний список
const listItem = document.querySelectorAll(".item")
// console.log(listItem)         //список h2+ul

 const remowCateg = `Number of categories: ${listItem.length}`;
 console.log(remowCateg)
listItem.forEach(item => {
    const category = `Category: ${item.querySelector("h2").textContent}`;
    const element = `Elements: ${item.querySelectorAll('ul li').length}`;

    // список категорій
    item.style.backgroundColor = "#F6F6FE";
    item.style.width = "392px";
    // item.style.height = "264px";
    item.style.padding = "16px";
    item.style.marginBottom = "24px";
    item.style.listStyleType = "none";
    item.style.borderRadius = "8px";

    // заголовки категорій
const title = item.querySelector("h2");

title.style.color = "#2E2F42";
title.style.fontSize = "24px";
title.style.fontWeight = "600";
title.style.lineHeight = "1.33"
title.style.letterSpacing = "0.03em"
title.style.marginBottom = "16px"
title.style.marginTop = "0"

// список підкатегорій
const listCategory = item.querySelector('ul');

listCategory.style.listStyleType = "none";
listCategory.style.color = "#2E2F42";
listCategory.style.fontSize = "16px";
listCategory.style.fontWeight = "400";
listCategory.style.lineHeight = "1.5"
listCategory.style.letterSpacing = "0.03em"
listCategory.style.padding = "0"


// позиції підкатегорій
const listCategoryLi = listCategory.querySelectorAll('li');
listCategoryLi.forEach(list => {
    
    list.style.border = "1px solid #808080"
    list.style.width = "360px"
    list.style.marginBottom = "8px";
    list.style.height = "40px";
    list.style.borderRadius = "4px";
    list.style.paddingLeft = "16px";
    list.style.paddingBottom = "8px"
    list.style.paddingTop = "8px"

// остатній елемент списку
const lastItem = listCategory.querySelector('li:last-child');
lastItem.style.margin = "0";
})


console.log(category)   
console.log(element) 
})





