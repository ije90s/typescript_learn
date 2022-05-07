//인터페이스
interface Developer {
    name: string;
    skill: string;
}
// interface Person {
//     name: string;
// }
class Person {
    name:string;
}
var developer: Developer; 
var person: Person;
//developer = person; //person이 더 많은 속성을 가지고 있거나 구조적으로 컸을 때, 타입 호환 가능
developer = new Person();
//person = developer;

// 함수
var add = function(a: number){
    // ...
}
var sum = function(a: number, b: number){
    // ...
}
add = sum;
sum = add;

// 제너릭
interface Empty<T>{
    //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; 
empty2 = empty1; 

interface NotEmpty<T>{
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; 
notempty2 = notempty1;