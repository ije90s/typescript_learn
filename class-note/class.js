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