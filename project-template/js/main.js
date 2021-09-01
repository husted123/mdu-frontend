
let teacher1 = {
  name : "Birgitte Kirk Iversen",
  title : "Senior Lecturer",
  department : "Programmes within Digital Communication and Multimedia",
  mail :  "bki@baaa.dk",
  phone : "+4572286316",
  img : "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335231430000&format=webp",
  link : "https://www.eaaa.dk/kontakt/find-medarbejder/medarbejder/birgitte-kirk-iversen/"
}

let teacher2 = {
  name : "Rasmus Cederdorff",
  title : "Lecturer",
  department : "Programmes within Digital Communication and Multimedia",
  mail : "race@baaa.dk",
  phone : "+4572286318",
  img : "https://www.eaaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335324630000&format=webp"

}

let teacher3 = {
  name : "Martin Aagaard Nøhr",
  title : "Lecturer",
  department : "Programmes within Digital Communication and Multimedia",
  mail : "mnor@baaa.dk",
  phone : "+4572286320",
}

let teacher4 = {
  name : "Lykke Dahlén",
  title : "Lecturer",
  department : "Programmes within Digital Communication and Multimedia",
  mail : "lyda@baaa.dk",
  phone : "+4572286329",
  img : "https://www.eaaa.dk/media/vk5evkad/lykke-dahlen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335291100000&format=webp"
}

let teacher5 = {
  name : "Morten Algy Bonderup",
  title : "Lecturer",
  department : "Programmes within Digital Communication and Multimedia",
  mail : "moab@baaa.dk",
  phone : "+4572286339",
  img : "https://www.eaaa.dk/media/hi4lv5hw/morten-bonderup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335308630000&format=webp"
}


document.querySelector("#grid-container").innerHTML = 
`
<div>
<a href="${teacher1.link}"><img src="${teacher1.img}"></a>
<h1>${teacher1.name}</h1>
<span>${teacher1.title}<span>
<span>${teacher1.department}<span>
<br>
<address>${teacher1.mail}<br> ${teacher1.phone}<address>

</div>

<div>
<img src="${teacher2.img}">
<h1>${teacher2.name}</h1>
<span>${teacher2.title}<span>
<span>${teacher2.department}<span>
<br>
<address>${teacher2.mail}<br> ${teacher2.phone}<address>
</div>

<div>
<img src="${teacher3.img}">
<h1>${teacher3.name}</h1>
<span>${teacher3.title}<span>
<span>${teacher3.department}<span>
<br>
<address>${teacher3.mail}<br> ${teacher3.phone}<address>
</div>

<div>
<img src="${teacher4.img}">
<h1>${teacher4.name}</h1>
<span>${teacher4.title}<span>
<span>${teacher4.department}<span>
<br>
<address>${teacher4.mail}<br> ${teacher4.phone}<address>
</div>

<div>
<img src="${teacher5.img}">
<h1>${teacher5.name}</h1>
<span>${teacher5.title}<span>
<span>${teacher5.department}<span>
<br>
<address>${teacher5.mail}<br> ${teacher5.phone}<address>

</div>`


