const categories = document.querySelector("#categories");
// console.log(categories)       //головний список
const listItem = document.querySelectorAll(".item")
console.log(listItem)         //список h2+ul
const listItemUl = document.querySelectorAll("li.item ul")
console.log(listItemUl)
 const remowCateg = `Number of categories: ${listItem.length}`;
 console.log(remowCateg)
listItem.forEach(item => {
    const category = `Category: ${item.querySelector("h2").textContent}`;
    const element = `Elements: ${item.querySelectorAll('ul li').length}`;
console.log(category)   
console.log(element) 
})



