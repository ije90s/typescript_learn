//ES6 이전 방식 > 생성자 함수로 프로토타입으로 이용 가능
function Person(name, age){
    this.name = name; 
    this.age = age;
}
var capt = new Person("캡틴", 100);

class Person {
    //클래스 로직 
    consturctor(name, age){
        console.log("생성 되었습니다.");
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30); // 생성되었습니다.
console.log(seho);