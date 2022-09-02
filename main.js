

// selecting element
let btnInterest = document.querySelector(".simple-interest");
let btnDisplayInterest = document.querySelector(".display-interest");

let inputAmount = document.querySelector(".amount");
let inputRate = document.querySelector(".rate");
let inputTime = document.querySelector(".time");

// function cal interest
function interest(p, r, t){
    let i = p * r * t /100
    // console.log("Your interst is " + i);
    btnDisplayInterest.innerHTML = "Your interst after  " + t + " years of investing  $" + p +
     " at " + r +"% rate is " + '<b>$' + i + '</b>';
    inputAmount = inputRate = inputTime = "";

}




// adding an event listener
btnInterest.addEventListener('click', ()=>{


    let floatAmount = parseFloat(inputAmount.value);
    let floatRate = parseFloat(inputRate.value);
    let floatTime = parseFloat(inputTime.value);
   
    // calling the dunction interest
   interest(floatAmount, floatRate ,floatTime)

});

