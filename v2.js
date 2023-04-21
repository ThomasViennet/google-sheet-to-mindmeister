/*
* 
*/

const nodes = [
    ['A', ''],
    // ['Q', 'E'],
    ['M', 'Y'],
    ['B', 'A'],
    ['C', 'A'],
    // ['D', 'Z'],
    ['E', 'D'],
    ['F', 'A'],
    // ['Z', ''],
    ['Y', 'B'],
    ['K','C'],
];

function mindmeister(nodes) { //nodes = [['child', 'parent'], ...];

    let response = [];

    // Find tree’s roots
    let children = nodes.map(child => child[0]);
    nodes.forEach(nodes => {
        if (nodes[1] == '' || !children.includes(nodes[1])) {//no parent or parent unknown = root
            response.push([nodes[0]]);
        }
    });

    // Find parent's children
    function findChildren(parent, nodes) {
        let children = nodes.filter(node => node[1] === parent[0]);
        return children.map(child => child[0]);
    }

    // Find children of each parent
    for (let parent = 0; parent < response.length; parent++) {// 

        let rangParent = parent;

        let indent = ' ';
        children = findChildren(response[parent].filter(element => element !== indent), nodes);
        let indentParent = response[parent].filter(element => element === indent);
        indentParent.push(indent);

        for (child of children) {
            response.splice(++rangParent, 0, indentParent.concat(child));
        }
    }

    return response.map(node => [node.join('')]);
}

console.log(mindmeister(nodes));