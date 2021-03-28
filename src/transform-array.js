const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let a  = [...arr];

  const shadowElements = (el,i) => {
    a[i][1] = typeof el;
  } 

  a.forEach(shadowElements);
  
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) throw new CustomError('Input data is not an array.');
  let res = [];
  
  let delNext = false;
  let dblNext = false;

  const handleArr = (el, i) => {
    // console.log(`${i} : ${el}`);

    if (dblNext) {
      dblNext = false;
      res.push();
      res.push();
      return;
   }

    if (delNext) {
       delNext = false;
       return;
    }

    switch (el){
      case "--discard-next" : {delNext=true; return;}   
      case "--discard-prev" : {res.pop(); return; }
      case "--double-next" : {dblNext = true; return;}
      case "--double-prev" : {let x=res.pop(); res.push(x);res.push(x);}
      default :
      res.push(el);
    }
  }

  a.forEach(handleArr);
  
res.filter(x => x !== undefined);

console.log(a);
return a;


};
