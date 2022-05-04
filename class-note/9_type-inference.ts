
// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10){
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc', 
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

var detailedItem: DetailDropdown<number> = {
    description: 'abc', 
    tag: 'ab',
    value: 'abcd', 
    title: 'abcde'
}
