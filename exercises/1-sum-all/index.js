/**
 *
 */
const sumAll = (first,second) => {
    let value=0;
    if(first>0 && second>0 &&(typeof(first)==='number'&&typeof(second)==='number')){
        if(first>second){
            for(let i=second;i<=first;i++)
            value+=i;
            
        }else{
            for(let i=first;i<=second;)
            value+=i;
            i++;
        }
    }else{
        value= 'ERROR';
        return value;
    }
return value;
}

module.exports = sumAll
