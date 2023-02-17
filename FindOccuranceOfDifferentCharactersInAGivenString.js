let str = "sentence";
let strObj = {};
for(let i = 0;i<str.length;i++){
    let key = str[i];
    let condition = strObj.hasOwnProperty(key);
    if(condition){
        strObj[key] = strObj[key] + 1;
    }
    else{
        strObj[key] = 1;
    }
}
console.log(strObj);