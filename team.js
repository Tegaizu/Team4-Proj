let anotherPerson = {
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
};


peopleArray.push(anotherPerson);


console.log(peopleArray);



function printPeopleWithPets(peopleArray) {
    console.log("People with pets:");
    for (let person of peopleArray) {
      if (person.petName) {
        console.log(`${person.name} has a pet named ${person.petName}`);
      }
    }
  }
  
  
  function printPeopleWithFavoriteGame(peopleArray) {
    console.log("People with 'LOL' or 'League Of Legends' as favorite video game:");
    for (let person of peopleArray) {
      const favoriteGame = person.favoriteVideoGame.toLowerCase();
      if (favoriteGame === 'lol' || favoriteGame === 'league of legends') {
        console.log(`${person.name} likes 'LOL' or 'League Of Legends'`);
      }
    }
  }
  

  printPeopleWithPets(peopleArray);
  printPeopleWithFavoriteGame(peopleArray);
  
