/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 * @returns array 
 */

const getCommonData = (arr1, arr2) => {
    const arr = arr1.filter((e) => arr2.includes(e));
    return arr;
}

const a1 = [1, 3, 4, 67, 2, 8, 10, 'deep'];
const a2 = [5, 'deep', 7, 3, 6, 10, 11];

const result = getCommonData(a, b);

console.log(result);