1.可迭代性 需要实现Symbol.iterator属性
(1).for..of 语句
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

(2).for..of vs. for..in 语句
相同点：for..of和for..in均可迭代一个列表
不同点：
1).for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}

2).for..in可以操作任何对象,for..of关注于迭代对象的值
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

3).代码生成 目标为 ES5 和 ES3 迭代器只允许在Array类型上使用,在非数组值上使用 for..of语句会得到一个错误
