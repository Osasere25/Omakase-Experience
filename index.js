
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints += 50
// console.log(bonusPoints)

// bonusPoints -= 75
// console.log(bonusPoints)

// bonusPoints += 50
// console.log(bonusPoints)

// function increment() {
//     console.log("The button was clicked")
// // }


// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
    
// }

// countdown()


// function myOsa(){
//     //let num = 42
//     console.log(42)
// }
// myOsa()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function raceTime(){
// console.log(lap1 + lap2+ lap3)

// //or 

// let totalTime = lap1 + lap2+ lap3
// console.log(totalTime)
// }


// raceTime()
   

// let lapsCompleted = 0

// function incrementLap(){
//     increment = lapsCompleted + 1
//     lapsCompleted = increment
//     console.log(lapsCompleted)

//     //better practice
//     // lapsCompleted = lapsCompleted + 1

// }

// incrementLap()
// incrementLap()
// incrementLap()

// let countEl =document.getElementById("count-el")
// let count = 0

// function increment(){
//     count = count + 1
//     countEl.innerText = count
// }

// function save(){
//     console.log(count)
// }

// function previousEntries(){
    
// }


// let username  = "Per"

// let message  = "You have three new notifications"



// let messageToUser =  message + ", " + username

// // console.log(messageToUser)


// let name = "Jasmine Obazogbon"
// let greeting = "Hi, my name is"

// let myGreeting = greeting + " " + name + "."

// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Jasmine Obazogbon!"
// let greeting = "Welcome back "


//  welcomeEl.innerText = greeting + name


//  welcomeEl.innerText  += "👋"


let countEl =document.getElementById("count-el")
let count = 0;

function increment(){
     count += 1
     countEl.innerText = count
 }

 function decrement(){
    count -= 1
    countEl.innerText = count
 }
let saveEl = document.getElementById("save-el")

 function save(){
    // let countStr = " " + count + " - "
    // saveEl.innerText += countStr
    let countStr = count + " - "
    saveEl.textContent += countStr
     console.log(count)
     countEl.innerText = 0
     count = 0
  }
  bookingEl = document.getElementById("booking-el")
let total =0;

  function totalBooking(){
    total += 1;
    bookingEl.innerText  +' ' +  total;
    

  }



 //function previousEntries(){
    
 



