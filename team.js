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
petName : "Tjay"
},

{
  name: "Riccardo",
  surname: "Sideri",
  age: 24,
  city: "Carbonia",
  hobby: "GinTonic",
  favoriteFood: "Sushi",
  favoriteVideoGame: "LeagueOfLegend",
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


console.log(alphaOrder(arr))
console.log(`Nomi in comune: ${sameName(arr)}`)


console.log(arr);



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
  

  printPeopleWithPets(arr);
  printPeopleWithFavoriteGame(arr);


  function ageOrder(arr) {
    const sortedUsers = arr.sort((a, b) => a.age - b.age);
    
    sortedUsers.forEach(user => {
      console.log(`${user.name} Age: ${user.age}`);
    });
  }
  
  ageOrder(arr);

