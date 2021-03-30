const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let counter=1;
    let totalDepth=1;
    
    arr.forEach(element => {
      if (Array.isArray(element)){
        counter = this.calculateDepth(element) + 1;
      } 
      
      if (totalDepth < counter) {
          totalDepth = counter;
      }

    });
    
    return totalDepth;
  }

};