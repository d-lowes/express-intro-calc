const { type } = require("express/lib/response");
const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  
  const numberList = strNums.split(",");

  for (let num of numberList) {
    if (Number.isNaN(Number(num))) {
        throw new BadRequestError(`${num} is not a number`);
    }
  }

  return numberList.map(num => Number(num));;
}


module.exports = { convertStrNums };