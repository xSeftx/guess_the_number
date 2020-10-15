'use strict';

let mathRandom = Math.floor(Math.random() * 100 + 1);

function quessNumber() {
    let namber = mathRandom;
    let question = prompt('Введите число'); 
    
    if (isNaN(question) || question === '') {         
        alert('Введите число');
        return quessNumber();

    } else if (question === null){
        return alert('Игра окончена!!!');
       
    } else if (question > namber){
        alert('Загаданное число меньше');
        return quessNumber();

    } else if (question < namber){
        alert('Загаданное число больше');
        return quessNumber();

    } else {        
        alert('Поздравляю, Вы угадали!!!');
        
        
    } 
    

     

}

quessNumber();

    






