const peopleArr = [
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
  console.log(peopleArr);

const printPeopleWithPets = (arr) => {
  console.log("People with pets:");
  for (let person of arr) {
    if (person.petName) {
      console.log(`${person.name} has a pet named ${person.petName}`);
    }
  }
};

const printPeopleWithFavoriteGame = (arr) => {
  console.log("People with 'LOL' or 'League Of Legends' as favorite video game:");
  for (let person of arr) {
    const favoriteGame = person.favoriteVideoGame.toLowerCase();
    if (favoriteGame === 'lol' || favoriteGame === 'league of legends') {
      console.log(`${person.name} likes 'LOL' or 'League Of Legends'`);
    }
  }
};
