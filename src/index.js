module.exports = function check(str, bracketsConfig) {
    let arr = [];
    for (let elem of bracketsConfig) {
        arr.push(elem.join(""));
    }
    function func(str, arr) {
        if (str.length === 0) {
            return true;
        } else {
            for (let elem of arr) {
                if (str.includes(elem) == true) {
                    return func((str = str.replace(elem, "")), arr);
                }
            }
            return false;
        }
    }
    return func(str, arr);
};
