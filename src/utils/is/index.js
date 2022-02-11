// 判断值是否为某个类型
export function is(val, type) {
    return toString.call(val) === `[object ${type}]`;
}
// 判断是否为数字
export function isNumber(val) {
    return is(val, 'Number');
}