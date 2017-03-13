//布尔
let isDone: boolean = false;

//数字
let decLiteral: number = 6;

//字符串
let strname: string = "bob";

//数组
let list: Array<number> = [1, 2, 3];

//元祖 Tuple
let x: [string, number];

//枚举
enum Color {Red, Green, Blue};

let c: Color = Color.Green;

//任意类型（var）
let notSure: any = 4;

let varlist: any[] = [1, true, "free"];

//空值
function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined || null;

let u: undefined = undefined;

let n: null = null;


// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}


type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}