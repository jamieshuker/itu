//return an array of objects according to key, value, or key and value matching
function findArrayIndexByNameAndValue(obj, key, val) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i][key] == val)
            return i;
    }

    //not found
    return -1;
}

