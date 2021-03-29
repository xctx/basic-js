const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {

  let a  = [...arr];
  let res = [];

  if (!Array.isArray(arr)) throw new CustomError('Input data is not an array.');

  const handleArr = (el, i) => {

  switch (el){
      case "--discard-next" : {
        if (i<a.length-1){
            a.splice(i+1,1);
        }
        break;
      }   
      case "--discard-prev" : {
        if (i>1 && a[i-1] !== "--discard-next") {
            res.pop();
        }
        break; 
      }
      case "--double-next" : {
        if (i<a.length-1) {
            res.push(a[i+1]);
        }
        break;
      }
      case "--double-prev" : {
        if (i>1 && a[i-1] !== "--discard-next") {
          res.push(res[i-1]);
        }
        break;
      }
      default :
      res.push(el);
    }
  }

  a.forEach(handleArr);
  
return res;

};