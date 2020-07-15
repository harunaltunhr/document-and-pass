/**
 *
 */
const reverseString = (str) => {
    let newArray=[];
    newArray = str.split('');
    newArray= newArray.reverse();
    newArray = newArray.join('');
    return newArray;
  }

module.exports = reverseString
