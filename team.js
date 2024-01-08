const arr = [{
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
}];

console.log(arr);

const printPeopleWithPets = (arr) => {
  console.log("People with pets:");
  const personWithPet = arr.find(person => person.petName);
  if (personWithPet) {
    console.log(`${personWithPet.name} has a pet named ${personWithPet.petName}`);
  }
};

const printPeopleWithFavoriteGame = (arr) => {
  console.log("People with 'LOL' or 'League Of Legends' as favorite video game:");
  const personWithFavoriteGame = arr.find(person => {
    const favoriteGame = person.favoriteVideoGame.toLowerCase();
    return favoriteGame === 'lol' || favoriteGame === 'league of legends';
  });

  if (personWithFavoriteGame) {
    console.log(`${personWithFavoriteGame.name} likes 'LOL' or 'League Of Legends'`);
  }
};

printPeopleWithPets(arr);
printPeopleWithFavoriteGame(arr);
