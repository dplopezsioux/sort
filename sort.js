module.exports = function sortCategoriesForInsert(inputJson) {
  let jsonVlaue;
  if (typeof inputJson == "string") jsonVlaue = JSON.parse(inputJson);
  else jsonVlaue = [].concat(inputJson);

  let properJsonOutput = [];
  jsonVlaue.forEach((element) => {
    if (element.parent_id == null) properJsonOutput.unshift(element);
    else properJsonOutput.push(element);
  });

  return properJsonOutput;
};

console.log(sortCategoriesForInsert(value));
