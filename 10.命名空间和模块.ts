1.命名空间 module X {} 相当于现在推荐的写法 namespace X {}
1).namespace Validation {}
2).分离到多文件 以我们加入了引用标签来告诉编译器文件之间的关联
//Validation.ts
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

//LettersOnlyValidator.ts
/// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}
3).确保所有编译后的代码都被加载
(1)方式一：tsc --outFile sample.js Test.ts
(2)方式二：通过 <script>标签把所有生成的JavaScript文件按正确的顺序引进来 编译后的文件

4).别名 import q = 别名；

2.模块 import { a } from "moduleA"
1).模块解析策略:共有两种可用的模块解析策略：Node和Classic

默认node 其他情况 Classic： AMD | System | ES2015
