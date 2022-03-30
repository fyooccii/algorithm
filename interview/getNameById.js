// 给出如下地址数据格式，实现函数 getNameById，输入address 和 id ，输出 id 对应的地址 name

const address = [
    {
        id: 1,
        name: '北京市',
        children: [
            {
                id: 11,
                name: '海淀区',
                children: [
                    {
                        id: 111,
                        name: '中关村',
                    },
                ],
            },
            {
                id: 12,
                name: '朝阳区',
            },
        ],
    },
    {
        id: 2,
        name: '河北省',
    },
];

// 请实现该函数
// 输入：getNameById(address, 2)，输出："河北省"
// 输入：getNameById(address, 111)，输出："中关村"
// 输入：getNameById(address, 32)，输出："" （未查找到，输出空字符串）
function getNameById(address, id) {
    const ids = String(id)
        .split('')
        .reduce((total, cur) => {
            const temp = total.length ? total[total.length - 1] : '';
            return [...total, `${temp}${cur}`];
        }, []);
    let currentLayer = address;
    let start = 1;
    while (start <= ids.length) {
        currentLayer = currentLayer.filter(
            e => e.id === Number(ids[start - 1])
        )[0];
        if (currentLayer) {
            if (!currentLayer.children) {
                if (start === ids.length) {
                    return currentLayer.name;
                } else {
                    return '';
                }
            }
            currentLayer = currentLayer.children;
        } else {
            return '';
        }
        start++;
    }
}
console.log(getNameById(address, 111));
