// Task 1

let navButtons = document.querySelectorAll("div:has(a)")[0];
console.log(navButtons)

let psButton = document.createElement("a");
psButton.className="btn"
psButton.textContent = "Pro Subscription"

navButtons.appendChild(psButton)