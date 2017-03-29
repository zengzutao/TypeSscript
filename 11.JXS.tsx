1.TypeScript具有两种JSX模式：preserve和react

2.类型断言：TypeScript在 .tsx文件里禁用了使用尖括号的类型断言 as操作符
var foo = bar as foo;

3.类型检查
1).固有元素 固有元素使用特殊的接口JSX.IntrinsicElements来查找
declare namespace JSX {
    interface IntrinsicElements {
        foo: any
    }
}

<foo />; // 正确
<bar />; // 错误

//捕获所有字符串索引
declare namespace JSX {
   interface IntrinsicElements {
       [elemName: string]: any;
   }
}

2).基于值的元素 基于值的元素会简单的在它所在的作用域里按标识符查找
//情况一
import MyComponent from "./myComponent";

<MyComponent />; // 正确
<SomeOtherComponent />; // 错误

//情况二
function MyFactoryFunction() {
  return {
    render: () => {
    }
  }
}

// 使用调用签名
var myComponent = MyFactoryFunction();

// 元素类的类型 => FactoryFunction
// 元素实例的类型 => { render: () => void }

3).属性类型检查  支持可选属性和必须属性
declare namespace JSX {
  interface IntrinsicElements {
    foo: { requiredProp: string; optionalProp?: number }
  }
}

<foo requiredProp="bar" />; // 正确
<foo requiredProp="bar" optionalProp={0} />; // 正确
<foo />; // 错误, 缺少 requiredProp
<foo requiredProp={0} />; // 错误, requiredProp 应该是字符串
<foo requiredProp="bar" unknownProp />; // 错误, unknownProp 不存在
<foo requiredProp="bar" some-unknown-prop />; // 正确, `some-unknown-prop`不是个合法的标识符

4.嵌入的表达式 JSX允许你使用{ }标签来内嵌表达式
/// <reference path="react.d.ts" />
interface Props {
  foo: string;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>
  }
}

<MyComponent foo="bar" />; // 正确
<MyComponent foo={0} />; // 错误
