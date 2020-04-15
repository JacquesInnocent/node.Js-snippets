const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What do layers give out?', (answer)=>{
    if (answer == 'egg', 'eggs') {
        console.log('Correct');
        rl.close();
    
    } else {
    console.log('wrong answer. the correct answer is '+ answer);    
    }
});

/*
var num1 = 31;
var num2 = 20;
let finalAnswer = num1 + num2;
finalAnswer.question = (`What is ${num1} + ${num2}?`),
(userInput)=>{
    if (userInput.trim() == finalAnswer) {
        console.log('Your answer is correct');
        userInput.close(); 
    } else {
        console.log('your answer is wrong');
    }
}
*/