type Heros = 'Hulk' | 'Capt' | 'Thor'; 
type HeroAges = { [K in Heros]: number }

// for in 반복문 코드 
// var arr = ['a', 'b', 'c']; 
// for(var key in arr){
//     console.log(arr[key]);
// }