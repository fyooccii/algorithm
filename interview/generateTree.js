const list = [
    {
        id: 1,
        pid: 0,
        name: 'root',
    },
    {
        id: 2,
        pid: 1,
        name: 'a',
    },
    {
        id: 3,
        pid: 1,
        name: 'b',
    },
    {
        id: 4,
        pid: 3,
        name: 'c',
    },
    {
        id: 5,
        pid: 2,
        name: 'e',
    },
];

const generateTree = rowArrayData => {
    let rootNode = {};
    rowArrayData.forEach((outerE, outerIndex) => {
        if (
            !rowArrayData.find(
                (innerE, innerIndex) =>
                    innerE.id === outerE.pid && innerIndex !== outerIndex
            )
        ) {
            rootNode = outerE;
        } else {
            let parentNode;
            for (let i = 0; i < rowArrayData.length; i++) {
                if (rowArrayData[i].id === outerE.pid) {
                    parentNode = rowArrayData[i];
                    break;
                }
            }
            !parentNode.children && (parentNode.children = []);
            parentNode.children.push(outerE);
        }
    });
    return rootNode;
};
console.log('result', JSON.stringify(generateTree(list)));
