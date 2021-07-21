//1 Написать функции, которые сортируют массив по возрастанию и по убыванию. В функцию массив передается в качестве аргумента.

function sortArrayAsc(array) {
    for (let i = 0; i < array.length - 1; i++)
    { 
        for (let j = 0; j < array.length - 1 - i; j++)
        { 
            if (array[j + 1] < array[j])
            { 
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp; 
            }
        }
    }                     
    return array;
}

function sortArrayDesc(array) {
    for (let i = 0; i < array.length - 1; i++)
    { 
        for (let j = 0; j < array.length - 1 - i; j++)
        { 
            if (array[j + 1] > array[j])
            { 
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp; 
            }
        }
    }                     
    return array;
}

//2 Написать функции, которые находят минимальный и максимальные элемент массива. В функцию массив передается в качестве аргумента.

function findMaxValue(arr) {
    let max = 0;
    arr.forEach(el => {
      if(el > max) max = el;
    });
    return max;
  }

function findMinValue(arr) {
    let min = arr[0];
    arr.forEach(el => {
      if(el < min) min = el;
    });
    return min;
  }

//3 Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

function isPalindrome(string) {
    return string.toLowerCase() === string.toLowerCase().split('').reverse().join('');
}

//4 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями: вывод fizz вместо чисел, кратных 3; вывод buzz вместо чисел, кратных 5;вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

function checkMultiplicity (number) {
    for(let i = 1; i <= number; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }
        else if(i % 3 === 0) {
            console.log('fizz');
        }
        else if(i % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}

//5 Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

function isAnagram(string1, string2) {
    string1 = string1.replace(/\W+/g, "").toLowerCase();
    string2 = string2.replace(/\W+/g, "").toLowerCase();
    console.log(string1, string2);
    if(string1.length !== string2.length) {
        return false;
    }
    return string1.split('').sort().join('') === string2.split('').sort().join('');
}

//6 Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u».

function getCountVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let countVowels = 0;

    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if(string[i].toLowerCase() === vowels[j]) {
                countVowels++;
            }
        }
    }
    return countVowels;
}

//7 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

function GetReverseArray(array) {
    let resultArray = [];
    for(let i = array.length - 1; i > 0; i--) {
        resultArray.push(array[i]);
    }
    return resultArray;
}

//8 Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

function GetAverage(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

//9 Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

function inArray(string, array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].toLowerCase() === string.toLowerCase()) {
            return true;
        }
    }
    return false;
}

//10 Дана строка, например, '123456'. Сделайте из нее '214365'.

function transformString(string) {
    let arrayFromString = string.split('');
    for(let i = 0; i < string.length; i += 2) {
        let temp = arrayFromString[i];
        arrayFromString[i] = arrayFromString[i + 1];
        arrayFromString[i + 1] = temp;
    }
    return arrayFromString.join('');
}

//11 В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function getDecadeNumber(dayNumber) {
    if (dayNumber >= 1 && dayNumber <= 10) {
        return 'Первая декада месяца';
    }

    else if (dayNumber > 10 && dayNumber <= 20) {
        return 'Вторая декада месяца';
    }

    else if (dayNumber > 20 && dayNumber <= 31) {
        return 'Третья декада месяца';
    }
}

//12 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

function getMonthName(month) {
    let months = {
        1: 'Зима',
        2: 'Зима',
        3: 'Весна',
        4: 'Весна',
        5: 'Весна',
        6: 'Лето',
        7: 'Лето',
        8: 'Лето',
        9: 'Осень',
        10: 'Осень',
        11: 'Осень',
        12: 'Зима'
    }

    return months[month];
}

let array = [5,1,3,32,3,7,6,22];

let arraySortedAsc = sortArrayAsc(array);

console.log('#1 Asc', arraySortedAsc)

let arraySortedDesc = sortArrayDesc(array);

console.log('#1 Desc', arraySortedDesc)

let maxValue = findMaxValue(array);

console.log('#2 MaxValue:', maxValue);

let minValue = findMinValue(array);

console.log('#2 MinValue:', minValue);

console.log('#3', isPalindrome('казак'));

console.log('#4', checkMultiplicity(100));

console.log('#5', isAnagram('Rat.. !', 'ta!! r!?'));

console.log('#6', getCountVowels("sadgfsaaaa"));

console.log('#7', GetReverseArray([3, 4, 5, 6, 7, 8]));

console.log('#8', GetAverage([5, 5, 5, 5, 5, 6]))

console.log('#9', inArray('abC', ['ss', 'sb', 'dsds', 'abC']));

console.log('#10', transformString('123456'));

console.log('#11', getDecadeNumber(1));

console.log('#12', getMonthName(5));
