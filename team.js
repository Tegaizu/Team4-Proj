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
