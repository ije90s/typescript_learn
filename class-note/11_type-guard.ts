interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce();
console.log(tony.skill);

//타입 단언으로 이용한 정의 방식 > 반복 코드가 발생
if((tony as Developer).skill){ 
    var skill = (tony as Developer).skill;
    console.log(skill);
}else if((tony as Person).age){
    var age = (tony as Person).age;
    console.log(age);
}

//타입 가드 정의 > boolean 값 리턴(많이 쓰이는 패턴)
function isDeveloper(target: Developer | Person): target is Developer{
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){ //Developer가 true이면
    console.log(tony.skill);
}else{ //Developer가 false이면(Person)
    console.log(tony.age);
}