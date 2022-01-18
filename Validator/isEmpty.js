/**
 * To check whether given string is empty or not
 * @param {string} string 
 * @returns boolean
 */
const isStringEmpty = (string) => {
    return string.trim().length === 0;
}

const stringResult1= isStringEmpty('');
const stringResult2= isStringEmpty(' ');
console.log('stringResult1 :', stringResult1);
console.log('stringResult2', stringResult2);



/**
 * To check whether given array is empty or not
 * @param {array} array 
 * @returns boolean
 */
const isArrayEmpty = (array) => {
    return array.length === 0;
}

const arrayResult1= isArrayEmpty([]);
const arrayResult2= isArrayEmpty(['hello']);
console.log('arrayResult1 :', arrayResult1);
console.log('arrayResult2', arrayResult2);



/**
 * To check whether given object is empty or not
 * @param {object} obj 
 * @returns boolean
 */
const isObjectEmpty = (obj) =>{
    return Object.keys(obj).length === 0;
}

const objectResult1= isObjectEmpty({});
const objectResult2= isObjectEmpty({a:'Deep'});
console.log('objectResult1', objectResult1);
console.log('objectResult2', objectResult2);



/**
 * To check whether given set is empty or not
 * @param {set} mySet 
 * @returns boolean
 */
const isSetEmpty = (mySet) =>{
    return mySet.size === 0;
}

const setResult1= isSetEmpty(new Set());
const setResult2= isSetEmpty(new Set([5,8,9]));
console.log('setResult1', setResult1);
console.log('setResult2', setResult2);

/**
 * To check whether given map is empty or not
 * @param {map} myMap 
 * @returns boolean
 */
const isMapEmpty = (myMap) =>{
    return myMap.size === 0;
}

const mapResult1= isMapEmpty(new Map());
const mapResult2= isMapEmpty(new Map([['name', 'foo']]));
console.log('mapResult1', mapResult1);
console.log('mapResult2', mapResult2);