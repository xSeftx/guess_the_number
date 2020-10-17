'use strict';
let random = Math.floor(Math.random() * 100 + 1);
console.log(random);
let count = 10;

function quessNumber() {
    
    let namber = random; 
    console.log(namber);       
    let question = prompt('Введите число'); 
    
    
    if (question === null){
        alert('Игра окончена!!!');
        return

    } else if (isNaN(question) || question.trim() === '') {         
        alert('Введите число');
        return quessNumber();
       
    } else if (question > namber){
        
        alert('Загаданное число меньше ' + 'осталось попыток ' + --count);
        
        if (count === 0) {
            let ansver = confirm('Попытки закончились, хотите сыграть еще?');
            if (ansver === true){                
                return newGame(), count = 10, quessNumber();
            } else {
                return
            }
        } else {
            
            return quessNumber();
        }        

    } else if (question < namber){        
        alert('Загаданное число больше ' + 'осталось попыток ' + --count);
        if (count === 0) {
            let ansver = confirm('Попытки закончились, хотите сыграть еще?');
            if (ansver === true){                
                return newGame(), count = 10, quessNumber();

            } else {
                return
            }
        } else {
            
            return quessNumber();
        }
        

    } else {        
            let ansver = confirm('Поздравляю Вы угадали, хотите сыграть еще?');
            if (ansver === true){                
                return newGame(), count = 10, quessNumber();

            } else {
                return
            }
        
    } 
    

     

}
function newGame() {
    random = Math.floor(Math.random() * 100 + 1);
        
       
};



quessNumber();
newGame();

 






