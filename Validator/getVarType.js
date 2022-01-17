/**
 * To check the type of any variable
 * @param { any } data 
 * @returns string
 */
const getVarType = (data) => {
  const varType = typeof data;
  if (varType === "object") {
    if (data === null) return "null";
    if (Array.isArray(data)) return "array";
    if (data instanceof Set) return "set";
    if (data instanceof Map) return "map";
  }
  return varType;
};

const result = getVarType({});
console.log(result);
