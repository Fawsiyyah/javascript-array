let Hermes = [
    { 
        name: "Edward-Precious Omegbu",
         image : "img/Giyuu.jpg", 
         bestFood: "pasta", 
         complexion: "dark", 
         thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "One Piece", 
         age: 26
    }, 
    { 
        name: "Fawsiyyah Lamidi",
        image: "img/Fawsiyyah.jpg", 
        bestFood: "Rice and Beans with stew, egg and Dodo", 
        complexion: "Fair", 
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Little", 
        age: 17
    },
    { 
        name: "Ayodeji Eluyemi",
        image: "img/Ayo.jpg", 
        bestFood: "Fried rice", 
        complexion: "dark", 
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Arthdal Chronicles", 
        age: 20
    },
    { 
        name: "Jimi-Bada Adedamola",
        image: "img/Bada.jpg", 
        bestFood: "Beans", 
        complexion: "dark", 
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Star Wars", 
        age: 24
    },
       
    { 
        name: "Natacha Danbadan",
        image: "img/nat.jpg", 
        bestFood: "Banga Soup and Starch", 
        complexion: "brown", 
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Like Stars on Earth", 
        age: 24
    },
    { 
        name: "Obi Divine",
        image: "img/Divine.jpg", 
        bestFood: "Yam and Egg Sauce",  
        complexion: "dark", 
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Ready Player one", 
        age: 22
    },     
    
    { 
        name: "Akorede Mohammed",
        image: "img/siso.jpg", 
        bestFood: "pasta", 
        complexion: "dark",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"], 
        bestMovie: "One Piece", 
        age: 22
    },
    { 
        name: "Ifechukwude Nwaodor",
        image: "img/Ifee.jpg", 
        bestFood: "Rice", 
        complexion: "Fair",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"], 
        bestMovie: "Titanic", 
        age: 26
    },
    { 
        name: "Okike Michael",
        image: "img/chinonso.jpg", 
        bestFood: "African salad", 
        complexion: "dark",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"], 
        bestMovie: "One Piece", 
        age: 25
    },
     
];

let team = document.getElementById("row");

for (i=0; i < Hermes.length; i++) {
    let card = `<div class="card-wrapper col-lg-4 col-md-6 px-3 mb-4">
                <div class="card p-3">
                    <div class= "img-container ratio ratio-1x1">
                        <img src= "${Hermes[i].image}" alt="" class="img-fluid">
                    </div>
                        <p class="name">${Hermes[i].name}</p>
                        <p class="name">${Hermes[i].bestFood}</p>
                        <p class="name">${Hermes[i].complexion}</p>
                        <p class="name">${Hermes[i].thingsLearnt}</p>
                        <p class="name">${Hermes[i].bestMovie}</p>
                        <p class="name">${Hermes[i].age}</p>
                       <button class="alert" onClick="nameAlert(${i})">Click me!</button>
                    </div>
             </div>`;
    row.innerHTML += card;
}

function nameAlert(i) {
    alert(Hermes[i].name);
}