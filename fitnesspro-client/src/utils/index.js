const _ = require('lodash');

export const getObjectWithKeys = (inpObj, keys) => {
    let ob = {};
    if (!Array.isArray(keys)) {
        return ob;
    }
    if (!inpObj) {
        return ob;
    }

    _.forEach(keys, (v, i) => {
        if (inpObj.hasOwnProperty(v)) ob[v] = inpObj[v];
    });

    return ob;
};