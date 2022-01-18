/**
 * To check nested Object values.
 * @param {object} obj 
 * @returns object
 */
const isObject = (obj) =>
  typeof obj === "object" && !Array.isArray(obj) && obj !== null;

/**
 * To remove Undefined and Null variable from the given oject.
 * @param {object} data 
 * @returns object
 */
const removeUndefinedAndNull = (data) => {
  return Object.keys(data).reduce(
    (newObj, key) =>
      data[key] !== undefined && data[key] !== null
        ? {
            ...newObj,
            [key]: isObject(data[key])
              ? removeUndefinedAndNull(data[key])
              : data[key],
          }
        : newObj,
    {}
  );
};

const result = removeUndefinedAndNull({
  name: "foo",
  age: null,
  city: undefined,
  hobbies: ["Dancing", "Painting"],
  work: {
    partTime: undefined,
    fullTime: "High.ai",
  },
});
console.log(result);
