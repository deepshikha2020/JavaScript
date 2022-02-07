const keyValueObject = (keys, values) => {
    const result = {};
    keys.map((key, index)=>{
        // console.log(key, values[index]);
        result[key]=values[index];
    });
    return result;
}

// TODO: implement this function with reduce() as well.


const keys = ['a', 'b', 'a', 'c', true];
const values = [20, 70, 25, 79, 70];

const result = keyValueObject(keys, values);

console.log(result);
/**
 * output = {
 *     "a": 25,
 *     "b": 70,
 *     "c": 79,
 *     true: 70
 * }
 */
