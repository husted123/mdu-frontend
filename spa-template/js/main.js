
console.log("Ready to do Single Page Applications 🎉");

let familyMembers = [
    {
        Name : "Birgitte Husted",
        Age : 52,
        Relation : "Mom",
        img: "https://scontent.faar2-1.fna.fbcdn.net/v/t1.6435-9/93350326_10223460391964647_4408609424822763520_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NMJbVJqV3bMAX8cGVZs&_nc_ht=scontent.faar2-1.fna&oh=e2a51d94300bf283e99e97a1ca40406d&oe=614BDAB6",
        id: "member1"
      },
    
    {
        Name : "Christian Husted",
        Age : 54,
        Relation : "Dad",
        img: "https://scontent.faar2-1.fna.fbcdn.net/v/t1.6435-9/37202246_10217156571289861_1545616716736757760_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=c8VF-uQVSOEAX9FY9Kf&_nc_ht=scontent.faar2-1.fna&oh=898f742e129b0bcca23251b057a9232b&oe=614CA2E3",
        id: "member2"
      },
    
    {
        Name  : "Mathias Husted",
        Age : 25,
        Relation : "Brother",
        img: "https://scontent.faar2-1.fna.fbcdn.net/v/t1.6435-9/67796376_10215385155206769_4757977638230818816_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=uIbELuPisaUAX91j2Rr&_nc_ht=scontent.faar2-1.fna&oh=a38d5fa947270777214aa94692d7dc49&oe=614B4C4B",
        id: "member3"
      },
    {
      Name : "Jeppe Husted",
      Age : 16,
      Relation : "Brother",
      img: "https://scontent.faar2-1.fna.fbcdn.net/v/t1.6435-9/177016994_995118871296191_4058899738942475457_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=x1Y5qCtA2qEAX_ntcuM&_nc_ht=scontent.faar2-1.fna&oh=8f2ec137c12cdc63b31e33e34b6795ff&oe=614CBEE3",
      id: "member4"
    },
    {
    Name  : "Anders Husted",
    Age : 22,
    Relation : "Me",
    img: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/100087435_3465535400143251_1050179865342377984_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=m6gWH2HgirMAX-ctS8w&_nc_ht=scontent-cph2-1.xx&oh=14effac230aa43032f4f413285d1000d&oe=615039CC",
    id: "member5"
    }
    ]
    
    // sort by alphabet 
    familyMembers.sort(function(a, b){
        if(a.Name < b.Name) {return -1;}
        if(a.Name > b.Name) {return 1;}
        return 0;
    
       } )
    
 

    // display family members
    function appendFamilyMembers(familyMembers) {
        document.querySelector("#family-container").innerHTML = "";

        for (const familyMember of familyMembers)

    document.querySelector("#family-container").innerHTML += /*html*/
    `<article id="${familyMember.id}">
    <img class="familyMemberImg" src="${familyMember.img}">
    <h3>${familyMember.Name} </h3>
    Age: ${familyMember.Age} <br>
    Relation: ${familyMember.Relation}
    <button onclick="deleteFunction()" id="deleteButton">x</button>
    </article> 
    ` 

   ;

}

    appendFamilyMembers(familyMembers)


    //Add new family member
    function addFamilyMember(){

    let img = document.querySelector("#img").value;     
    let name = document.querySelector("#name").value;     
    let age = document.querySelector("#age").value;     
    let relation = document.querySelector("#relation").value;   
    
    let newFamilyMember = {
        Name: name,
        Age: age,
        Relation: relation,
        img: img,
    };
    familyMembers.push(newFamilyMember);
    document.querySelector("#family-container").innerHTML="";
    appendFamilyMembers(familyMembers)


    }

    //Search function

    function searchFunction(value){
        value = value.toLowerCase();
        let = filteredFamilyMembers = [];
        for(let familyMember of familyMembers){
            let name = familyMember.Name.toLowerCase();
            if (name.includes(value)){
                filteredFamilyMembers.push(familyMember)
            }
        }
        appendFamilyMembers(filteredFamilyMembers)
    }


let jsonData = []

fetch("https://cvrapi.dk/api? search=erhvervsakademi%20aarhus&country=dk")
.then(function(response)
{return response.json();
})
.then(function(json) {
  jsonData=json;
  
  console.log(jsonData);

  function appendJsonData() {
    document.querySelector("#contact-container").innerHTML = ""
      document.querySelector("#contact-container").innerHTML += /*html*/
      `<address>${jsonData.name}<br>
      ${jsonData.address} <br>
      ${jsonData.zipcode} <br>
      ${jsonData.city}
      </address>`
    }

    function appendProductionists(){
      for(let i=0; i < jsonData.productionists.length; i++){
        document.querySelector("productionist-container").innerHTML += /*html*/
        `<address> </address>`
      }
  
    }
    

  appendProductionists(jsonData)
  appendJsonData(jsonData)
});

