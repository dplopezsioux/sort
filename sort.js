module.exports = function sortCategoriesForInsert(inputJson) {
  let properJsonOutput = [];

  if (typeof inputJson == "string") properJsonOutput = JSON.parse(inputJson);
  else properJsonOutput = [].concat(inputJson);

  properJsonOutput.sort((a, b) => {
    if (a.parent_id == null) return -1;

    return a.parent_id - b.id;
  });

  return properJsonOutput;
};
