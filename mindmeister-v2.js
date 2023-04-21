/*
* Input : [['child', 'parent'], ...];
* Reponse : [['parent'],[' child']]
*/
function onOpen(e) {
    SpreadsheetApp.getUi()
        .createMenu('SEO')
        .addItem('Exporter pour mindmeister', 'mindmeister')
        .addToUi();
}

function mindmeister() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    const input = sheet.getSelection().getActiveRange().getValues();
    if (!sheet.getSheetByName("Mindmeister - Export")) {
        sheet.insertSheet('Mindmeister - Export');
    }
    const output = sheet.getSheetByName("Mindmeister - Export");
    output.clear();

    let response = [];

    // Find tree’s roots
    let children = input.map(child => child[0]);
    input.forEach(input => {
        if (input[1] == '' || !children.includes(input[1])) {//no parent or parent unknown = root
            response.push([input[0]]);
        }
    });

    // Find parent's children
    function findChildren(parent, input) {
        let children = input.filter(node => node[1] === parent[0]);
        return children.map(child => child[0]);
    }

    // Find children of each parent
    for (let parent = 0; parent < response.length; parent++) {// 

        let rangParent = parent;

        let indent = ' ';
        children = findChildren(response[parent].filter(element => element !== indent), input);
        let indentParent = response[parent].filter(element => element === indent);
        indentParent.push(indent);

        for (child of children) {
            response.splice(++rangParent, 0, indentParent.concat(child));
        }
    }
    output.getRange(1, 1, response.length, 1).setValues(response.map(node => [node.join('')]));
}