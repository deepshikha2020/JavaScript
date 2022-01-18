/**
 * To remove Undefined and Null variables from the given array.
 * @param {array} data 
 * @returns array
 */
const removeUndefinedAndNull =(data) => {
    return data.map((element) => {
        return Array.isArray(element) ? removeUndefinedAndNull(element) : element;
    }).filter(( element) => {
        return element !== undefined && element !== null;
    });
}

const result = removeUndefinedAndNull([42,[null, 1, 2], null, 21, [undefined,[1,3,null], null], 50, 40, undefined, 9, null]);
console.log(result);