特别说明：TypeScript 1.5里术语名已经发生了变化  “内部模块” 现在称做“命名空间” “外部模块”现在则简称为“模块”
1.导出 export
1).导出声明 任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加export关键字来导出
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

2).导出语句
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };

3).重新导出
export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

// 导出原先的验证器但做了重命名
export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";

//导出所有模块
export * from "./StringValidator"; // exports interface StringValidator
export * from "./LettersOnlyValidator"; // exports class LettersOnlyValidator
export * from "./ZipCodeValidator";  // exports class ZipCodeValidator

2.导入 import
1).导入一个模块中的某个导出内容
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();

//导出内容重命名
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();

2).将整个模块导入到一个变量，并通过它来访问模块的导出部分
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();

3).具有副作用的导入模块 import "./my-module.js";

3.默认导出 每个模块都可以有一个default导出
declare let $: JQuery;
export default $; //导入

import $ from "JQuery"; //导出

类和函数声明可以直接被标记为默认导出 标记为默认导出的类和函数的名字是可以省略的
export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}

export default "123";//导出一个值

1).export = 和 import = require()
export = ZipCodeValidator;

import zip = require("./ZipCodeValidator");

4.生成模块代码
Node.js (CommonJS)
Require.js (AMD)
isomorphic (UMD)
SystemJS或ECMAScript 2015
native modules (ES6)模块加载系统使用的代码

5.可选的模块加载和其它高级加载场景 模块加载器

选择性的加载模块：import id = require("...")

Node.js里的动态模块加载
declare function require(moduleName: string): any;

import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

if (needZipValidation) {
    let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
    let validator = new ZipCodeValidator();
    if (validator.isAcceptable("...")) { /* ... */ }
}

6.使用其它的JavaScript库

1).外部模块
//node.d.ts (simplified excerpt)
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}

//加载模块
// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");

2).外部模块简写
//declarations.d.ts
declare module "hot-new-module";

import x, {y} from "hot-new-module";

3).模块声明通配符 某些模块加载器如SystemJS 和 AMD支持导入非JavaScript内容
declare module "*!text" {
    const content: string;
    export default content;
}
// Some do it the other way around.
declare module "json!*" {
    const value: any;
    export default value;
}

import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";
console.log(data, fileContent);

7.创建模块结构指导
1).尽可能地在顶层导出
2).如果仅导出单个 class 或 function，使用 export default
3).如果要导出多个对象，把它们放在顶层里导出
4).明确地列出导入的名字
5).使用命名空间导入模式当你要导出大量内容的时候
6).模块里不要使用命名空间
