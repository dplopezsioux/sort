module.exports =
function sortCategoriesForInsert(inputJson) {
  let properJsonOutput = [];

  if (typeof inputJson == "string") properJsonOutput = JSON.parse(inputJson);
  else properJsonOutput = [].concat(inputJson);

  organiz();
  function organiz() {
    for (let indexP = 0; indexP < properJsonOutput.length; indexP++) {
      const element = properJsonOutput[indexP];
      if (element.parent_id == null)
      {
        properJsonOutput.splice(indexP,1);
        properJsonOutput.unshift(element);
      }
      for (let ind = 0; ind < properJsonOutput.length; ind++) {
        const ele = properJsonOutput[ind];
        if (ele.id == element.parent_id && indexP < ind) {
          properJsonOutput.splice(ind+1,0,element);
          properJsonOutput.splice(indexP,1);
          organiz();
        }
      }
    }
  }
  return properJsonOutput;
}
