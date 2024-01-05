let arr = [
    {
    name : "Oghenetega",
    surname : "Izu",
    age : 25,
    city : "Roma",
    hobby : "Musica",
    favoriteFood : "Carbonara",
    favoriteVideoGame : "fifa",
    favoriteFilm : "Lion King",
    favoriteBook : "Rich dad Poor dad",
    petName : ""
    },
    
    {
      name: "Riccardo",
      surname: "Sideri",
      age: 24,
      city: "Carbonia",
      hobby: "GinTonic",
      favoriteFood: "Sushi",
      favoriteVideoGame: "League Of Legends",
      favoriteFilm: "IoSonoLeggenda",
      favoriteBook: "Berserk",
      petName: "Micio"
    },
    
     {
    
    name: "Giovanni",
    surname: "Ranauro",
    age: 25,
    city: "Benevento",
    hobby: "Music",
    favoriteFood: "Pizza",
    favoriteVideoGame: "MW3",
    favoriteFilm: "HarryPotter",
    favoriteBook: "Cacciatorediaquiloni",
    petName: "Lilli"
    
    },
    
     {
    name : "Silvia",
    surname : "Iannini",
    age : 23,
    city : "Velletri",
     hobby : "reading",
    favoriteFood : "pasta",
    favoriteVideoGame: "",
    favoriteFilm : " ",
    favoriteBook : "cime tempestose",
    petName : "Bonnie"
    
    }
    
    ];
    
    
    function alphaOrder(arr){
    
        let list = arr.map((user) =>  user.surname + " " + user.name).sort()
        return list
        
        }
    
    
    function sameName(arr){
        let sameNam = []
           for(i = 0; i < arr.length - 1; i++){
               for(j = i + 1; j< arr.length; j++){
                    if(arr[i].name === arr[j].name){
                         sameNam.push(arr[j].name)
                       }
                    }
                }
    
            return sameNam;
        }
    
    
    
    
    function printPeopleWithPets(arr) {
        console.log("People with pets:");
        for (let person of arr) {
          if (person.petName) {
            console.log(`${person.name} has a pet named ${person.petName}`);
          }
        }
      }
      
      
      function printPeopleWithFavoriteGame(arr) {
        console.log("People with 'LOL' or 'League Of Legends' as favorite video game:");
    
        for (let person of arr) {
          const favoriteGame = person.favoriteVideoGame.toLowerCase();
          if (favoriteGame === 'lol' || favoriteGame === 'league of legends') {
            console.log(`${person.name} likes 'LOL' or 'League Of Legends'`);
          }
        }
      }
     
    
    
      function ageOrder(arr) {
        const sortedUsers = arr.sort((a, b) => a.age - b.age);
        
        sortedUsers.forEach(user => {
          console.log(`${user.name} Age: ${user.age}`);
        });
      }
     
    
      function middleAge (arr){
        return arr.reduce((acc, arr)=>acc + arr.age, 0) /arr.length
      }
    
    
      console.log(arr);
      console.log(alphaOrder(arr))
      ageOrder(arr);
      console.log(`Nomi in comune: ${sameName(arr)}`)
      printPeopleWithPets(arr)
      printPeopleWithFavoriteGame(arr)
      console.log(`The middle age is: ${middleAge(arr)}`)



