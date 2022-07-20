//Linking JS to ID`s from HTML

//Rule ID
const theRule = document.getElementById('rule');

//Button ID
const clickButton = document.getElementById('button');

//Creating Functions & Assigning

//Number
const number = [Math.floor(Math.random() * 100)]

//Event Listeners
 
//Button Event
clickButton.addEventListener('click', function(){
    //Input ID
    const inputText = document.getElementById('input').value; 

    if (inputText == number){
        theRule.innerHTML = 'You guessed right, your number was $(number)'
    } else if  (inputText < number){
        theRule.innerHTML = 'You guessed too low!'
    };
    if (inputText > number){
        theRule.innerHTML = 'You guessed too high!'
    }
});

