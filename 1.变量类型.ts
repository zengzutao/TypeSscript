1.基础类型

(1)：布尔值：let isDone: boolean = false;

(2)：数字：let decLiteral: number = 6;

(3)：字符串：let name: string = "bob";

(4)：模板字符串：let name:string=`Gene`;  let sentence:string =`Hello,my name is ${name}`;

(5)：数组：let list:number[]=[1,2,3,4];

(6)：数组泛型：let list:Array<number>=[1,2,3,4];

(7)：元组 （Tuple ：元组类型允许表示一个已知元素数量和类型的数组）：let x: [string, number];

(8)：枚举：enum Color {Red,Green,Blue}; let c:Color=Color.Green;

          enum Color {Red = 1, Green = 2, Blue = 4}; let colorName: string = Color[2];

(9)：任意值：let notSure: any = 4; notSure.ifItExists();

(10)：空值（void类型像是与any类型相反，它表示没有任何类型）

1).函数：无返回值
function warnUser(): void {
    alert("This is my warning message");
}

2).变量只能为 null 或 undefined
let unusable: void = undefined;

(11)：Null 和 Undefined let u: undefined = undefined; let n: null = null;

(12)：never 类型表示的是那些永不存在的值的类型 never类型是任何类型的子类型，也可以赋值给任何类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

(13).类型断言
1).形式一：尖括号语法
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

2).形式二：as语法
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

(14).Symbols Symbols是不可改变且唯一的 内置symbols
