"use strict"; // to enable strict mode and modern JavaScript functionality

// declaring a variable with a value
let message = "Hi Students";

// accessing the variable and logging it to the console
console.log(message);

// appending the value from the variable to thee DOM element #content
document.querySelector("#content").innerHTML = message;

// showing and alert with a message
function showAlert() {
  alert('Open your Developer Console!');
}


let teacher1 = {
  name = "Birgitte Kirk Iversen",
  title = "Senior Lecturer",
  department = "Programmes within Digital Communication and Multimedia",
  mail =  "bki@baaa.dk",
  phone = "+4572286316",
}

let teacher2 = {
  name = "Rasmus Cederdorff",
  title = "Lecturer",
  department = "Programmes within Digital Communication and Multimedia",
  mail =  "race@baaa.dk",
  phone = "+4572286318",
}