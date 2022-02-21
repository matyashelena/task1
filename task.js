let anyArray = [7, 10, 1, -12, 0, 2, -158, 1000, 3, 28, 0, 4, 5, -132];
console.log(anyArray);

// функция currentElem подсчитывает количество положительных, нулевых и отрицательных элементовю Как сделать её рекурсивной?
function currentElem(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result.length;
}
console.log(currentElem(anyArray, (elem) => {
  return elem > 0;
}));
console.log(currentElem(anyArray, (elem) => {
  return elem == 0;
}));
console.log(currentElem(anyArray, (elem) => {
  return elem < 0;
}));

// Рекурсивная функция maxNum возвращает минимальный элемент массива,
//  рекурсивная функция minNum возвращает максимальный элемент массива
// как избежать повтор кода? Не получается правильно вставить callback, чтоб функция работала
function maxNum(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        return maxNum(arr);
      } else continue;
    }
    return arr[0];
}

function minNum(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        return minNum(arr);
      } else continue;
    }
    return arr[0];
}

console.log(maxNum(anyArray));
console.log(minNum(anyArray));