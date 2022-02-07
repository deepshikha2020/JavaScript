/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 * @returns array
 */

const getUniqueDataOfFirstArray = (arr1, arr2) => {
    return arr1.filter((e) => !arr2.includes(e));
}

const getUniqueDataOfSecondArray = (arr1, arr2) => {
    return arr2.filter((e) => !arr1.includes(e));
}

const getUniqueDataOfBothArray = (arr1, arr2) => {
    return [
        ...getUniqueDataOfFirstArray(arr1, arr2),
        ...getUniqueDataOfSecondArray(arr1, arr2)
    ];
}

const array1 = [1, 3, 4, 67, 2, 8, 10, 'deep'];
const array2 = [5, 7, 3, 6, 10, 11];

console.log(getUniqueDataOfFirstArray(a, b));
console.log(getUniqueDataOfSecondArray(a, b));
console.log(getUniqueDataOfBothArray(a,b));
