// Дана матрица из целых чисел от 1 до 9, размером 3 * N, где N может быть
// больше либо равна 3. Необходимо определить содержит ли каждый участок
// матрицы 3 * 3 все числа от 1 до 9.
// Например:
// Входные данные:
//     [
//         [1, 2, 3, 2, 7],
//         [4, 5, 6, 8, 1],
//         [7, 8, 9, 4, 5],
//     ];
// 1 участок:
// 1 2 3
// 4 5 6
// 7 8 9
// содержит все цифры от 1 до 9
// 2 участок:
// 2 3 2
// 5 6 8
// 8 9 4
// не содержит все цифры от 1 до 9
// 3 участок:
// 3 2 7
// 6 8 1
// 9 4 5
// содержит все цифры от 1 до 9
// Результат: [true, false, true]

const b = [
            [1, 2, 3, 2, 7],
            [4, 5, 6, 8, 1],
            [7, 8, 9, 4, 5],
        ];
const ideal = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function checkMatr(matr) {
  const start = matr[0].length - 3;
  let result = [];
  for (let i = 0; i <= start; i++) {
    const section = matr.map(row => row.slice(i, i + 3)).flat();
    if(ideal.every(el => section.includes(el))) {
      result.push(true);
    } else {
      result.push(false);
    };
  }
  return result;
}

console.log(checkMatr(b));