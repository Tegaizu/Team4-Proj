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
    petName: ""
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
    favoriteFilm: " ",
    favoriteBook: "cime tempestose",
    petName: "Bonnie"
  }
];

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

function alphaOrder(arr) {
  return arr.map(user => `${user.surname} ${user.name}`).sort();
}

function sameName(arr) {
  let sameNam = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name === arr[j].name) {
        sameNam.push(arr[j].name);
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

function middleAge(arr) {
  return arr.reduce((acc, user) => acc + user.age, 0) / arr.length;
}

console.log(peopleArr);
console.log(alphaOrder(peopleArr));
ageOrder(peopleArr);
console.log(`Nomi in comune: ${sameName(peopleArr)}`);
printPeopleWithPets(peopleArr);
printPeopleWithFavoriteGame(peopleArr);
console.log(`The middle age is: ${middleAge(peopleArr)}`);
