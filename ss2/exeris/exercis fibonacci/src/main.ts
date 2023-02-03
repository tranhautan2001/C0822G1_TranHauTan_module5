
function fibonacci( num:number): number {

    if (num <= 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

let sum : number = 0;

// @ts-ignore

let num:number = + prompt("nhập số fibonacci");

 for (let i = 0; i <num ; i++) {

    sum += fibonacci(i)

}

console.log(" tổng " + num + " số fibonacci là :" + sum)
