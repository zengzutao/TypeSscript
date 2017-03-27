1.可选属性：可选属性名字定义的后面加一个?符号
interface SquareConfig {
  color?: string;
  width?: number;
}

2.只读属性 变量：const 属性：readonly
interface Point {
    readonly x: number;
    readonly y: number;
    [propName: string]: any; 参数数量可变
}

3.函数类型 只有参数列表和返回值类型的函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}

4.可索引的类型（索引签名：字符串和数字两种）

1).字符串索引签名
interface NotOkay {
    [index:string]:string;
}

2).数子索引签名
interface NotOkay {
  [index:number]:string
}

3).只读索引
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

5.类类型 实现接口 只会检查实例而不会检查类的静态部分（比如类的构造函数）
//检查类的构造函数
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
//检查类的实例
interface ClockInterface {
    tick();
}
//构造函数
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

//实例一
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

//实例二
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

6.扩展接口 一个接口可以继承多个接口，创建出多个接口的合成接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

7.混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

8.接口继承类 继承类的成员但不包括其实现 继承到类的private和protected成员 只能被这个类或其子类所实现
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

class TextBox extends Control {
    select() { }
}
