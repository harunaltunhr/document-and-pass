/**
 *
 */

const fibonacci = (value) => {
    if(value>0 && (typeof(value)==='number'||'string')){
     let i=0;
     let fibonacciArray=[];
     for(i;i<value;i++){
       fibonacciArray.push(1);
 
     }
     for (i=2;i<value;i++){
 fibonacciArray[i]=fibonacciArray[i-2]+fibonacciArray[i-1];      
     }
     return fibonacciArray[value-1];
 
 }
 return 'OOPS'
 }

module.exports = fibonacci
