/**
 * Created by ywj on 15/7/17.
 * 菲波拉奇数实现
 */
/**
 * 实现： 非为尾巴调用的例子
 * @param n
 * @returns
 */
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
/**
 * 改写成尾调用形式
 * @param n
 * @param total
 * @returns {*}
 */

function myFactorial(n, total) {
    if (n === 1) return total;
    return myFactorial(n - 1, n * total);
}
var begin = new Date;
factorial(1000, 1);
var end = new Date;
console.log(end - begin);

var begin = new Date;
myFactorial(1000, 1);
var end = new Date;
console.log(end - begin);
