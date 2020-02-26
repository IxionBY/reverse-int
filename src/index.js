module.exports = function reverse (n) {
    var modulN = Math.abs(n);
    var stringN = modulN.toString();
    var reverseN = stringN.split('').reverse().join('');
    var a = Number(reverseN);
    return (a);
}