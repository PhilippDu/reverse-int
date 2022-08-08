module.exports = function reverse (n) {
    let str = String(n),
        strNew = '',
        rez = 0;

    str = str.replace(/\-/g, '');

    for(let i = str.length-1; i >= 0; i--) {
        strNew = strNew.concat(str[i]);
    } 
    return rez = Number(strNew);
}
