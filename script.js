// Task 1

let navButtons = document.querySelectorAll("div:has(a)")[0];
// let navButtons = document.querySelector("div > a.btn")
// console.log(navButtons)

let psButton = document.createElement("a");
psButton.className="btn"
psButton.textContent = "Pro Subscription"

navButtons.appendChild(psButton)

// Task 2 adding menu item

let menuList = document.querySelector(".tags-container div");
// console.log(menuList)

let chineseItem = document.createElement("a");
chineseItem.href = "#";
chineseItem.innerText="Chinese(7)";

menuList.appendChild(chineseItem);

// Task 3 

let newItem = document.createElement("div");
newItem.className = "card";

let itemName = document.createElement("h5")
itemName.className = "recipe-name";
itemName.textContent = "Pan-Cake";

let itemDesc = document.createElement("p");
itemDesc.className = "recipe-disp";
itemDesc.textContent = "Prep : 15min | Cook : 30min";

let itemImage = document.createElement("img");
itemImage.src = "./img/recipe-6";

let itemGallary = document.getElementsByClassName("recipe-gallery");
console.log(itemGallary);


