
let receivesAFunction = (callback) => {
    callback();
}

let returnsANamedFunction = () => {
    let namedFunction = receivesAFunction;
    return namedFunction;
}

let returnsAnAnonymousFunction = () => {
return function(){};
}






























// //log weekly activities
// function Monday (){
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }

// function Tuesday(){
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// let Wednesday = () => {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
// }

// function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }

//   //This is tedious! Why do I make a function to store my five -mile run in?

// let fiveMileRun = () => {
//     console.log('Go for a five-mile run');
// }

// //Lets do the same thing for weight lifting and swimming laps

// let liftWeights = () => {
//     console.log("Pump iron");
// }

// let swimFortyLaps = () => {
//     console.log("Swim 40 laps");
// }

// //*phew* much better! Now we can simplify out Monday function from above!

// let Monday1 = () => {
//    exerciseRoutine(liftWeights);
// }

// /*Call back function created to shorten our first Monday1 function that called 2 functions:
//  let Monday1= () =>{}
//   runFiveMiles();
//   liftWeights();}*/

// let exerciseRoutine = (postRunActivity) => {
//     fiveMileRun();
//     postRunActivity()
// }

// //using an anonymous function as the parameter (postRunActivity)

// console.log(exerciseRoutine(()=>{console.log( "Go to a yoga class")}));

// //returning functions
// function morningRoutine(exercise) {
//     let breakfast;
  
//     if (exercise === liftWeights) {
//       breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//       breakfast = "kale smoothie";
//     } else {
//       breakfast = "granola";
//     }
  
//     exerciseRoutine(exercise);
  
//     // we could give this function a name if we wanted to, but since
//     // it's only available _inside_ morningRoutine(), we don't need to
//     return function () {
//       console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
//   }
