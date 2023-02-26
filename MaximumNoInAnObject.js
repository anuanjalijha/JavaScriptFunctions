let playerobj = {
    "football":5,
    "badminton":8,
    "cricket":2,
    "khokho":7
    
    
};

let max = -1;
for(let obj in playerobj){
if(max<playerobj[obj]){
    max = playerobj[obj];
}
// console.log(playerobj[obj]);
// console.log(max);
}
console.log(max);
let volleyballCheck = false;
for(let obj in playerobj){
    if(obj=="volleyball" ){
        volleyballCheck = true;
    }
    // else{
    //     playerobj["volleyball"] = 10;

    // }
    
}
if(volleyballCheck==true){
    console.log("element is already present");  
}
else{
    playerobj["volleyball"] = 10;
}
console.log(playerobj);
