// js 문자열 선언
// var str = 'hello';

// ts 문자열 선언
let str: string = 'hello'; 

// ts 숫자
let num: number = 10;

// ts 배열
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
let items: number[] = [1,2,3]; //리터럴 선언 

// ts 튜플 : 각 인덱스의 타입까지 정의
let address: [string, number] = ['gangnam', 'pangyo'];

// ts 객체 
let obj: object = {};
//let person: object = {
//    name: 'capt', 
//    age: 100
//};
let person: { name : string, age : number} = {
    //name: 'thor', 
    //age: 1000
}; // 객체를 구체적으로 정의(속성의 타입까지 정의) 

// ts 진위값
let show: boolean = true;

