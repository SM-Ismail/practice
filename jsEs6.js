// // let - let keyword allows to declare a variable in block scope. 

// var x = 100;

// {
//     let x = 0 ;
//     //here value of x is 0;
//     console.log(x);
// }

// // here outside of the curly braces the value of x is 100 as declared.
// console.log(x)



// //const is similar to let, value cannot be changed

// var x = 10

// {
//     const x = 2; 
//     console.log(x)
//     x = 11 //not allowed
// }
// //here x is 10. 

// arrow function 

// const yourTeam = "Argentina";
// const yourOpponent = "GERMANY";

// const firstFunction = (team1, team2) => {
//     if (team2 == "germany" || team2 == "Germany" || team2 == "GERMANY"){
//         return (" you are gonna LOSE, honey!!!!")
//     }
//     else {
//         return("you may win !!  probability is 0.5 btw =D")
//     }
// }

// const result = firstFunction(yourTeam, yourOpponent);

// console.log(result)




///the for/of lets you loop through properties or elements of any iterable, i.e. array, object, strings, maps, Nodelists and manymore.....

// for( let x of iterable){
//     use the x here
// }




// const myString = "world cup football is comming"
// var consonentCount =  0;
// var emptyStringCount = 0;
// var vowelCount = 0;
// let vowels = ['a', 'e', 'i', 'o', 'u', ' '];

// for (let c of myString){
    
//     // console.log(x);
//     // if (c == " "){
//     //     emptyStringCount += 1;       
//     // }
//     // else if (x == -1 ){ 
//     //     consonentCount += 1;        
//     // }
//     // else {
//     //     vowelCount += 1;
//     // }
//     switch(vowels.indexOf(c)){
//         case -1: {
//             consonentCount += 1;
//             break;
//         }
//         default: {
//             if(c == " "){ 
//                 emptyStringCount += 1;
//             }
//             else {
//                 vowelCount += 1;
//             }
//             break;
//         }
//     }
// }

// console.log("Here, number of vowles:", vowelCount, 
// ", number of consonents: ", consonentCount, ", empty space count: ", emptyStringCount);





///class- its an object building template.

// class Car{
//     constructor(property1, property2, property3){
//         this.name = property1,
//         this.year = property2,
//         this.manufacture = property3
//     }
// }

// const myCar = new Car("Ford", 2000, "USA");
// console.log(myCar)

// const myNewCar = new Car("BMW", 1990, "GERMANY");
// console.log(myNewCar.name, myNewCar.year, myNewCar.manufacture)


//promise
const myPromise = new Promise(function(myResolve, myReject){
    //producing code

    setTimeout(function () {myResolve("I LUV uuuuuuuuuu !!!!"),
        myReject("sorry!");
    }, 10000)

    // myResolve() // when successfull
    // myReject() //when unsuccessfull
});

myPromise.then(
    function(value){console.log(value)},
    function(error){console.log(error)}
);