const peopleArr = [
  {
    name: "Riccardo",
    surname: "Sideri",
    age: 24,
    city: "Carbonia",
    hobby: "GinTonic",
    favoriteFood: "Sushi",
    favoriteVideoGame: "leagueoflegends",
    favoriteFilm: "IoSonoLeggenda",
    favoriteBook: "Berserk",
    petName: "Micio"
  },
  {
    name: "Oghenetega",
    surname: "Izu",
    age: 25,
    city: "Roma",
    hobby: "Musica",
    favoriteFood: "Carbonara",
    favoriteVideoGame: "fifa",
    favoriteFilm: "Lion King",
    favoriteBook: "Rich dad Poor dad",
    petName: null
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
    name: "Silvia",
    surname: "Iannini",
    age: 23,
    city: "Velletri",
    hobby: "reading",
    favoriteFood: "pasta",
    favoriteVideoGame: "",
    favoriteFilm: null,
    favoriteBook: "cime tempestose",
    petName: "Bonnie"
  }
];

console.log(peopleArr);

const printPeopleWithPets = (arr) => {
  console.log("People with pets:");
  arr.filter(person => person.petName)
    .forEach(person => console.log(`${person.name} has a pet named ${person.petName}`));
};

const printPeopleWithFavoriteGame = (arr) => {
  console.log("People with 'LOL' or 'League Of Legends' as favorite video game:");
  arr.filter(person => person.favoriteVideoGame.toLowerCase() === 'lol' || person.favoriteVideoGame.toLowerCase() === 'leagueoflegends')
    .forEach(person => console.log(`${person.name} likes 'LOL' or 'League Of Legends'`));
};

const alphaOrder = (arr) => arr.map(user => `${user.surname} ${user.name}`).sort();

const ageOrder = (arr) => {
  const sortedUsers = [...arr].sort((a, b) => a.age - b.age);
  sortedUsers.forEach(user => console.log(`${user.name} Age: ${user.age}`));
};

const middleAge = (arr) => arr.reduce((acc, user) => acc + user.age, 0) / arr.length;

console.log(peopleArr);
console.log(alphaOrder(peopleArr));
ageOrder(peopleArr);
printPeopleWithPets(peopleArr);
printPeopleWithFavoriteGame(peopleArr);
console.log(`The middle age is: ${middleAge(peopleArr)}`);




