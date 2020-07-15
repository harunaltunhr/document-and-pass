/**
 *
 */
    const removeFromArray = (arr,...delValue) => {
 
        let newArray=arr;
        for(let value of delValue){
          for(let item of arr){
            if(item === value){
              newArray.splice(arr.indexOf(item),1);
              }
            }  
        }
        return newArray;
        };

module.exports = removeFromArray
