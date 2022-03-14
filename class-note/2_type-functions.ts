// 함수의 파라미터에 타입을 정의하는 방식
function sum(a:number, b: number) {
    return a+b;
} 
sum(10, 20); 

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
    return 10; 
}

// 함수에 타입을 정의 하는 방식(가장 기본적인 방식)
function sum2(a:number, b: number): number {
    return a+b;
}

//함수의 파라미터나 개수가 일치하지 않는 경우 오류가 발생
//타입스크립트가 함수의 스펙(규칙)을 이해 > 더 엄격하게 관리
//sum(10, 20, 30, 40);
//sum(10); 

// 함수의 옵셔녈 파라미터
function log(a: string, b ?: string){

}
log('hello world');
log('hello ts', 'abc');