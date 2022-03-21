enum Shoes {
    Nike = '나이키', 
    Adidas ='아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); //0(디폴트), 실제 입력된 값으로 나옴

// 예제 
enum Answer {
    Yes = "Y", 
    No = "N"
};
function askQuestion(answer: Answer){
    
    if(answer === Answer.Yes){
        console.log('정답');
    }

    if(answer === Answer.No){
        console.log('오답');
    }
}
askQuestion(Answer.Yes);
askQuestion('Y');
//askQuestion('yes');
//askQuestion('예스');
//askQuestion('y');