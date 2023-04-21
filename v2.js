/*
* 
*/

const nodes = [
    ['A', ''],
    // ['Q', 'E'],
    ['B', 'A'],
    ['C', 'A'],
    // ['D', 'Z'],
    ['E', 'D'],
    ['F', 'A'],
    // ['Z', ''],
    ['Y', 'B']
];

function mindmeister(nodes) { //nodes = [['child', 'parent'], ...];

    let response = [];

    // Find tree’s roots
    let children = nodes.map(child => child[0]);// bad ?
    nodes.forEach(nodes => {
        if (nodes[1] == '' || !children.includes(nodes[1])) {//no parent or parent unknown = root
            response.push([nodes[0]]);
        }
    });
    console.log('1');
    console.log(response);

    // Find parent's children
    function findChildren(parent, nodes) {
        let children = nodes.filter(node => node[1] === parent[0]);
        // return children.map(child => [indent + child[0]]);
        return children.map(child => [child[0]]);
    }

    // Find children of each parent
    for (let parent = 0; parent < response.length; parent++) {// 
        
        let parentBackup = parent;
        let indent = [' '];

        children = findChildren(response[parent], nodes);

        for (child of children) {
            response.splice(parent + 1, 0, child);//ajouter indentation pour enfant avec celle de son parent
            parent++;
            console.log(response);
        }

        parent = parentBackup;
    }
  
    return response;
}

console.log(mindmeister(nodes));