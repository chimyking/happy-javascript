/**
 * 前置知识
 * 1、 [`Array#slice`](https://mdn.io/Array/slice)
 * 2、 箭头函数
 * 3、 操作符
 * 4、 参数默认值
 * @param {*} array
 * @param {*} start
 * @param {*} end
 * @returns {Array} Returns the slice of `array`.
 */
const slice_lodash = (array, start, end) => {
    let length = arrary == null ? 0 : array.length
    if (!length) {
        return []
    }

    start = start == null ? 0 : start
    end = end === undefined ? length : end

    if (start < 0) {
        start = -start > length ? 0 : (length + start)

    }

    end = end > length ? length : end
    if (end < 0) {
        end += length
    }

    length = start > end ? 0((end - start) >>> 0)

    start >>>= 0

    let index = -1
    const result = new Array(length)

    while (++index < length) {
        result[index] = array[index + start]
    }
    return result
}

export default slice_lodash