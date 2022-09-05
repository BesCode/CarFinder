//variables
const navUl = document.querySelector("ul");
const lists = document.querySelectorAll("li");

//eventListeners
lists.forEach((list) => list.addEventListener("click", handleLists));
console.log(lists)
//functions
function handleMenu(){
    navUl.classList.toggle("show")
}

function handleLists(){
    navUl.classList.remove("show")
    lists.forEach((list) => list.classList.remove("active"));
    this.classList.add("active");
}