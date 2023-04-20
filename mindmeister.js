/* 
* Function that takes as input the arraySelect = [child, parent, optionalInformation1, optionalInformation2]
* and output an importable tree structure on https://www.mindmeister.com/fr
*/

function mindmeister() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const data = sheet.getSelection().getActiveRange().getValues();
  const out = sheet.getSheetByName("Mindmeister - Export");
  out.clear();

  let results = [];
  let backupParents = [];
  let backupChildren = [];
  let indent = [' '];
  let isChecked = false;
  let hasChild = false;

  results.push([data[0][0]]);

  for (let parent = 0; parent < data.length; parent++) {

    hasChild = false;

    for (let child = 0; child < data.length; child++) {

      if (isChecked) {

        child = backupChildren.pop() + 1;
        isChecked = false;

        if (child >= data.length) {
          break;
        }
      }

      if (data[child][1] === data[parent][0]) {

        results.push([indent.join().replaceAll(',', '') + data[child][0]]);
        hasChild = true;

        if (child === data.length) {
          parent = backupParents.pop();
        } else {
          backupParents.push(parent);
          backupChildren.push(child);
          indent.push(' ');
          parent = --child;
          break;
        }
      }
    }

    if (!hasChild) {
      parent = backupParents.pop() - 1;
      isChecked = true;
      indent.pop();
    }
  }
  out.getRange(1, 1, results.length, 1).setValues(results);
}