
// You should implement your task here.
module.exports = function towelSort (matrix) {
    let reversed;
    let newArr = [];
    if (matrix === undefined) {
        return [];
    }
    matrix.forEach((subArr, index) => {
       if(index % 2 !== 0) {
          reversed = subArr.reverse();
       }
       subArr.forEach((num) => {
           newArr.push(num);
       })
   })
    return newArr;
}
