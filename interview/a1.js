const str = 'fyhcdvgdggiytttnvc';
/**
 * 得到字符串中最长相同子串
 * 思路：双指针
 */
const getLongestStr = str => {
    const strArr = str.split('');
    let resultStr = '';
    let p1 = 0,
        p2 = 1;
    while (p2 < strArr.length) {
        if (strArr[p1] === strArr[p2]) {
            resultStr = str.slice(
                p1,
                p2 + 1 === strArr.length ? undefined : p2 + 1
            );
            p2++;
        } else {
            p1 = p2;
            p2++;
        }
    }
    console.log(resultStr || 'none');
};

getLongestStr(str);
