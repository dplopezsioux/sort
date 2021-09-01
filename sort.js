module.exports = function sortCategoriesForInsert(inputJson) {
  let properJsonOutput = [];

  if (typeof inputJson == "string") properJsonOutput = JSON.parse(inputJson);
  else properJsonOutput = [].concat(inputJson);

properJsonOutput.sort((a, b) => {
    if (a.parent_id == null) return -1;

    let pID = a.parent_id;
    if (a.parent_id == null) pID = -1;
    return pID - b.id;
  });
  
  return properJsonOutput;
};
