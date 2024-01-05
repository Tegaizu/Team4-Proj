let anotherPerson = [ {
name : "Silvia",
surname : "Iannini",
age : 23,
city : "Velletri",
 hobby : "reading",
favoriteFood : "pasta",
favoriteFilm : " ",
favoriteBook : "cime tempestose",
petName : "Bonnie"

}]

const team = [
    { name: 'Tega', age: 25 },
    { name: 'Riccardo', age: 24 },
    { name: 'Silvia', age: 24},
    { name: 'Giovanni', age: 25}

  ];

  function middleAge (team){
    return team.reduce((acc, team)=>acc + team.age, 0) /team.length
  }
let arr = [ {
name : "Silvia",
surname : "Iannini",
age : 23,
city : "Velletri",
 hobby : "reading",
favoriteFood : "pasta",
favoriteFilm : " ",
favoriteBook : "cime tempestose",
petName : "Bonnie"

}]



 

  function middleAge (arr){
    return team.reduce((acc, team)=>acc + team.age, 0) /team.length
  }
  console.log(middleAge(arr))
