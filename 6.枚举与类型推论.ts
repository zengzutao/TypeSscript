1.定义 枚举类型被编译成一个对象，它包含双向映射（name -> value）和（value -> name）
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A]; // "A"

2.常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

3.外部枚举 外部枚举用来描述已经存在的枚举类型的形状
declare enum Enum {
    A = 1,
    B,
    C = 2
}

4.最佳通用类型 typescript是结构化类型系统
let x = [0, 1, null];//考虑所有类型

//最佳通用类型 Animal为最佳类型
function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
}

1).当候选类型不能使用的时候我们需要明确的指出类型
let zoo = [new Rhino(), new Elephant(), new Snake()];//无法推断出类型

let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];

5.上下文类型 按上下文归类
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.buton);  //<- Error
};

window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.buton);  //<- Now, no error is given
};
