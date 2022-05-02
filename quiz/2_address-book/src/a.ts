function fetchItems(): string[] {
    var items = ['a','b','c'];
    return items;
}
let result = fetchItems();
console.log(result);

//비동기 처리 시에
function fetchItems2(): Promise<string[]>{
    var items: string[] = ['a','b','c'];
    return new Promise(function(resolve){
        resolve(items);
    });
}
fetchItems2();