// В массиве, содержащем 3 или более чисел, определить подходит ли
// каждая группа из трех чисел условию a > b < c или a < b > c. Оформить
// решение в виде функции которая принимает исходный массив и возвращает
// массив с результатом проверки каждой группы, где 1 удовлетворяет
// условию и 0 - нет.
// Например:
// Исходный массив:
// arr = [1, 3, 5, 4, 5, 7]
// Рассмотрим каждую группу:
// 1, 3, 5 => 1 < 3 < 5 - нет
// 3, 5, 4 => 3 < 5 > 4 - да
// 5, 4, 5 => 5 > 4 < 5 - да
// 4, 5, 7 => 4 < 5 < 7 - нет
// Результат: [0, 1, 1, 0]

arr = [1, 3, 5, 4, 5, 7]

function compare(arr) {
    var modified = []
    for(i=0; i<=arr.length-3; i++) {
        if ((arr[i]>arr[i+1] && arr[i+1]<arr[i+2]) || (arr[i]<arr[i+1] && arr[i+1]>arr[i+2])) {
            modified.push(1)
        } else {
            modified.push(0)
        }
    }
    console.log(modified);
}

compare(arr)