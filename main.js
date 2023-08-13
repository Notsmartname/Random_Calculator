function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function replyHomework(points, count) {

    let cong =  '';
    if (points == count) {
        cong =  'Поздравляю!';
    } 

    let total = prompt(`Ваш счет: ${points} ${cong} \n Повторить?(Yes/No): `)


    if ('yes' == total.toLowerCase()) {
        alert('(^_^)')
        homework();
    }

    alert('Goodbye...   Q__Q')   
}

function homework() {
    let count = +prompt('Задайте количество итераций.\nДолжно быть не больше 10 и не меньше 0');


    if (count <= 10 && count > 0) {
        let points = 0;
        for (let i = 0; i < count; i++) {
            let number1 = getRandomInt(10);
            let number2 = getRandomInt(10);

            let answer = +prompt(`${number1 } + ${number2} = `);
            let trueAnswer = (number1 + number2);

            if (answer == trueAnswer) {
                points++;
                alert('Верно');
            } else {
                alert('НЕ ВЕРНО!');
            }

        }
        
        replyHomework(points, count);

    } else if (count <= 0){
        alert('Число должно быть положительным и не меньше 0!');
        homework();
    } else if (count > 10) {
        alert('Число должно быть не больше 10!');
        homework();
    }
    
    count = 0;
    alert('(0_0)');
    homework();

}


homework()