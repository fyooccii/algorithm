let obj = {
    a: {
        b: {
            c: 123,
        },
    },
};

let str = 'a.d.c';
/**
 * 实现函数 期望得到的结果 123
 * 思路：暴力循环、有点类似于getNameById那道题
 */
function getData(obj, str) {
    const strArr = str.split('.');
    let result;
    let currentLayer = obj;
    for (let i in strArr) {
        if (strArr[i] in currentLayer) {
            if (Number(i) === strArr.length - 1) {
                result = currentLayer[strArr[i]];
            } else {
                currentLayer = currentLayer[strArr[i]];
            }
        } else {
            break;
        }
    }
    console.log(result || 'none');
}

getData(obj, str);
