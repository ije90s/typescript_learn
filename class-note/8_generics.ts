//function logText(text) {
//    console.log(text);
//    return text; 
//}
//logText(10);
//logText('하이');
//logText(true);

/*function logText<T>(text: T): T{
    console.log(text);
    return text;
}

logText<string>('하이');
*/

/*function logText(text: string){
    console.log(text);
    text.split('').reverse().join();
    return text;
}

function logNumber(num: number){
    console.log(num);
    return num; 
}
*/

/*function logText(text: string | number){
    console.log(text);
    return text;
}*/

//const a = logText('a');
//a.split('');
//logText(10); 
//const num = logNumber(10); 
//logText(true);


function logText<T>(text: T): T{
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

//logText('a');
//logText(10);

// 인터페이스에 제네릭을 선언하는 방법 
//interface Dropdown {
//    value: string; 
//    selected: boolean; 
//};

//const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
    value: T; 
    selected: boolean;
};

const obj: Dropdown<number> = { value: 'abc', selected: false};