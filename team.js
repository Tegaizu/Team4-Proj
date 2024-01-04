let arr = [
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

    },]

const team = [
    { name: 'Tega', age: 25 },
    { name: 'Riccardo', age: 24 },
    { name: 'Silvia', age: 24},
    { name: 'Giovanni', age: 25}

  ];
  
  function ageOrder(arr) {
    const sortedUsers = arr.sort((a, b) => a.age - b.age);
    
    sortedUsers.forEach(user => {
      console.log(`${user.name} Age: ${user.age}`);
    });
  }
  
  ageOrder(team);