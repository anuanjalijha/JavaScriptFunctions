 let obj1 = {
  "a": 5,
  "b":7

 };
 let str = "a";
 console.log(str.charCodeAt(0));
//  delete obj1("a");
 for(let obj in obj1){
    
    obj1[obj] = 0;
 }
 console.log(obj1);