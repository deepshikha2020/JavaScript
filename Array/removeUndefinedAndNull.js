const removeUndfinedAndNull =(data) => {
    return data.filter(( element ) => {
        return element !== undefined && element !== null;
    });
}

const result = removeUndfinedAndNull([42, null, 21, undefined, 50, 40, undefined, 9, null]);
console.log(result);