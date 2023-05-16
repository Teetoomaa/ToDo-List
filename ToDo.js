const itemBox = document.getElementById("item-box");
const listItem = document.getElementById("list-item");

function addTask() {
  if (itemBox.value === '') {
    alert("you must write something!");
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = itemBox.value;
    listItem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  itemBox.value = "";
  saveData();
}

listItem.addEventListener("click", function(e){
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); 
    saveData();
  } 
  else if(e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); 
      saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listItem.innerHTML);
}

function showTask() {
  listItem.innerHTML = localStorage.getItem("data"); 
}
showTask()