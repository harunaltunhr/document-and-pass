/**
 *
 */
const repeatString = (repeating,times) => {
    let repeatArray='';
    let i;
    if(times<0){
        repeatArray= 'ERROR';
        return repeatArray;
    }
    for(i=0;i<times;i++){
        repeatArray+=repeating;
    }
return repeatArray;
}

module.exports = repeatString
