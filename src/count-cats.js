module.exports = function countCats(arr) {
  
  return arr.flat().filter((el) => el=='^^').length;
    
};