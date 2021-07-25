// 3. Есть набор строк (строка это массив из слов), условия форматирования
// каждой этой строки и лимит символов в строке. Необходимо подготовить
// текст к публикации, так чтобы он удовлетворял условиям форматирования и
// не превышал количество символов в строке. Текст должен быть заключен
// символ * со всех сторон.
// Например:
// Набор строк, представлен в виде массива:
[
    ["Hello", "world"],
    ["Brad", "came", "to", "dinner", "with", "us"],
    ["He", "loves", "tacos"]
];
// Отдельным массивом задаются условия форматирования, где LEFT
// указывает что текст нужно выровнять по левой стороне, а RIGHT по правой:
["LEFT", "RIGHT", "LEFT"]
// Лимит символов в строке, целое положительное число: 16
// 1я исходная строка удовлетворяет условию лимита строки "Hello world" (11
// chars < 16). Учитывая правило форматирования для 1й строки LEFT.
// 2я исходная строка не влазит в лимит "Brad came to dinner with us" (27 chars
// > 16), значит разбиваем на строки и применяем правило форматирования
// RIGHT для всех этих строк.
// Итого на выходе должен быть такой результат:
[
    "******************",
    "*Hello world     *",
    "*    Brad came to*",
    "*  dinner with us*",
    "*He loves tacos  *",
    "******************"
]

let array = [
    ["Hello", "world"],
    ["Brad", "came", "to", "dinner", "with", "us"],
    ["He", "loves", "tacos"]
];

let position = ["LEFT", "RIGHT", "LEFT"]

function formating(arr) {
    const res = [];
    arr.forEach((el, i) => {
        let str = el.join(" ");
        let amountOfSpaces = Math.abs(16 - str.length);
        let right = '*' + ' '.repeat(amountOfSpaces) + 'a*';
        let left = '*a' + ' '.repeat(amountOfSpaces) + '*';
        if (str.length < 16) {
            if(position[i] == 'LEFT') {
                str = left.replace('a', str);
                res.push(str);
            } else {
                str = right.replace('a', str);
                res.push(str);
            }
        } else {
            let subStrLength = Math.floor(el.length/2);
            let subArr = [[el.splice(0, subStrLength).join(" ")], [el.join(" ")]];
            subArr.forEach((el) => {
                str = el.join(" ");
                amountOfSpaces = Math.abs(16 - str.length);
                right = '*' + ' '.repeat(amountOfSpaces) + 'a*';
                left = '*a' + ' '.repeat(amountOfSpaces) + '*';
                if (str.length < 16) {
                    if(position[i] == 'LEFT') {
                        str = left.replace('a', str);
                        res.push(str);
                    } else {
                        str = right.replace('a', str);
                        res.push(str);
                    }
                }
            });
        }        
    });
    res.push("******************",);
    res.unshift("******************",);
    return res
}

console.log(formating(array)); 


