interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용***
// 파라미터에 타입을 지정하면 특정 형식만 준수하는 데이터만 값을 받음. 
function getUser(user: User){ 
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);

// 함수의 스텍(구조)에 인터페이스 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function sum(a: number, b: number): number{
    return a + b;
}

//git 테스트 