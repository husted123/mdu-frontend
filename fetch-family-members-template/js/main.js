// =========== Product functionality =========== //
/*
global variable: _familyMembers
*/
let _familyMembers = [];

/*
Fetches json data from the file persons.json
*/
fetch('json/persons.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
    _familyMembers = jsonData;
    appendPersons(jsonData)

    // todo: call appendPersons(...)
  });
/*
Appends json data to the DOM
*/


function appendPersons(jsonData) {
 
    for (let _familyMember of _familyMembers) {
      console.log(_familyMember);
      document.querySelector(".grid-container").innerHTML += /*html*/ `
      <article>

        <h3>${_familyMember.name}</h3>
        ${_familyMember.age}<br>

      </article>`;
    }
    
  }

  appendPersons()
  // todo: append all persons to the DOM using a for-of loop
